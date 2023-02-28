<template>
  <NavBar />
  <MDBContainer class="mt-3">
    <MDBRow>
      <MDBCol v-for="charName in charList" :key="charName" md="2">
        <CharacterCard :charName="charName" />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBCol, MDBRow, MDBContainer } from "mdb-vue-ui-kit";
import NavBar from "../components/NavBar.vue";
import CharacterCard from "../components/CharacterCard.vue";
import genshindb from "genshin-db";

export default {
  components: {
    NavBar,
    MDBCol,
    MDBRow,
    MDBContainer,
    CharacterCard,
  },
  data() {
    return {
      charList: [],
    };
  },
  mounted() {
    this.charList = genshindb.characters("name", { matchCategories: true });
  },
};
</script>
