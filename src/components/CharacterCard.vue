<template>
  <MDBCard class="mb-1">
    <MDBCardImg :src="charDetails.images.icon" top alt="..." />
    <MDBCardBody>
      <MDBCardTitle>{{ charDetails.name }}</MDBCardTitle>
      <MDBCardText>
        {{ charDetails.title }}
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
    charName: String,
  },
  data() {
    return {
      charDetails: {},
    };
  },
  created() {
    this.getCharDetails();
  },
  methods: {
    getCharDetails() {
      this.charDetails = genshindb.characters(this.charName);
    },
  },
};
</script>
