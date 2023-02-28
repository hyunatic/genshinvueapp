<template>
  <NavBar />
  <div class="bg-image home-image text-center text-white mb-5">
    <h2 class="mt-5 h1">Welcome to Genshin Info</h2>

    <router-link to="/character"
      ><MDBBtn class="btn btn-outline-light" size="lg"
        >View Characters</MDBBtn
      ></router-link
    >
  </div>
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar, MDBBtn },
};
</script>

<style scoped>
.home-image {
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/28b78d108045493.5fb515fe155ae.jpg");
  height: 100vh;
}
</style>
