<template>
  <MDBCard class="mb-1">
    <MDBCardImg :src="artifactDetails.images.flower" top alt="..." />
    <MDBCardBody>
      <MDBCardTitle>{{ artifactDetails.name }}</MDBCardTitle>
      <MDBCardText>
        {{ artifactDetails.title }}
      </MDBCardText>
      <MDBBtn tag="a" href="#!" color="primary">View</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
} from "mdb-vue-ui-kit";
import genshindb from "genshin-db";
export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
  },
  props: {
    artifact: String,
  },
  data() {
    return {
      artifactDetails: {},
    };
  },
  created() {
    this.getArtifactDetails();
  },
  methods: {
    getArtifactDetails() {
      this.artifactDetails = genshindb.artifacts(this.artifact, {
        verboseCategories: true,
      });
    },
  },
};
</script>
