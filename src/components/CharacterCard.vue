<template>
  <MDBCard>
    <MDBCardImg
      src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
      top
      alt="..."
    />
    <MDBCardBody>
      <MDBCardTitle>{{ charDetails }}</MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </MDBCardText>
      <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
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
    charDetails: String,
  },
  mounted() {},
  methods: {},
};
</script>
