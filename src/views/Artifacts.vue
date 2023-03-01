<template>
  <NavBar />

  <MDBContainer class="mt-3">
    <MDBRow class="mb-3">
      <MDBCol md="12">
        <MDBInput
          @keydown="searchArtifacts"
          v-model="searchText"
          label="Search Character"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow v-for="artifact in buffer" :key="artifact">
      <MDBCol md="2">
        <ArtifactCard :artifact="artifact" />
      </MDBCol>
      <MDBCol md="10">
        <ArtifactDetails :artifact="artifact" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBCol, MDBRow, MDBContainer, MDBInput, MDBBtn } from "mdb-vue-ui-kit";
import NavBar from "../components/NavBar.vue";
import ArtifactCard from "../components/ArtifactCard.vue";
import ArtifactDetails from "../components/ArtifactDetails.vue";
import genshindb from "genshin-db";

export default {
  components: {
    NavBar,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBBtn,
    MDBContainer,
    ArtifactCard,
    ArtifactDetails,
  },
  data() {
    return {
      artifactList: [],
      buffer: [],
      searchText: "",
    };
  },
  mounted() {
    this.artifactList = genshindb.artifacts("5", { matchCategories: true });
    this.buffer = this.artifactList;
  },
  methods: {
    searchArtifacts() {
      this.buffer = this.artifactList.filter((x) =>
        x.toLowerCase().includes(this.searchText)
      );
      if (this.searchText.length == 0) this.buffer = this.artifactList;
    },
  },
};
</script>
