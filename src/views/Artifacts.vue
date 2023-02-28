<template>
  <NavBar />
  <MDBContainer class="mt-3">
    <MDBRow v-for="artifact in artifactList" :key="artifact">
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
import { MDBCol, MDBRow, MDBContainer } from "mdb-vue-ui-kit";
import NavBar from "../components/NavBar.vue";
import ArtifactCard from "../components/ArtifactCard.vue";
import ArtifactDetails from "../components/ArtifactDetails.vue";
import genshindb from "genshin-db";

export default {
  components: {
    NavBar,
    MDBCol,
    MDBRow,
    MDBContainer,
    ArtifactCard,
    ArtifactDetails,
  },
  data() {
    return {
      artifactList: [],
    };
  },
  mounted() {
    this.artifactList = genshindb.artifacts("5", { matchCategories: true });
  },
};
</script>
