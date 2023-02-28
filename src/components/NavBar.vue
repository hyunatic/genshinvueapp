<template>
  <MDBNavbar light bg="light" expand="lg" container>
    <MDBNavbarBrand href="#">Genshin Info</MDBNavbarBrand>
    <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
    <MDBNavbarNav collapse="navbarNav">
      <MDBNavbarItem to="/" active>Home</MDBNavbarItem>
      <MDBNavbarItem to="/character"> Characters </MDBNavbarItem>
      <MDBNavbarItem to="/artifact"> Artifacts </MDBNavbarItem>
    </MDBNavbarNav>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-vue-ui-kit";
export default {
  components: {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
  },
};
</script>
