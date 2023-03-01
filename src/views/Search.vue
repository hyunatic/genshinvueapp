<template>
  <NavBar />
  <MDBContainer class="mt-3">
    <MDBRow>
      <MDBCol md="4">
        <MDBInput v-model="searchChar" label="Search Character" />
      </MDBCol>
      <MDBCol md="4">
        <MDBInput v-model="searchElement" label="Search Element" />
      </MDBCol>
      <MDBCol md="4">
        <MDBBtn @click="handleSubmit" color="primary">Submit</MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBInput, MDBCol, MDBRow, MDBContainer, MDBBtn } from "mdb-vue-ui-kit";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      searchChar: "",
      searchElement: "",
    };
  },
  methods: {
    handleSubmit() {
      const form = { char: this.searchChar, element: this.searchElement };
      fetch("https://example.come/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: form,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      console.log(form);
    },
  },
  components: {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    NavBar,
  },
};
</script>
