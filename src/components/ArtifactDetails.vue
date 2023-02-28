<template>
  <MDBTabs v-model="activeTabId4" vertical>
    <MDBTabNav tabsClasses="mb-3 text-center">
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1"
        >Set Effect</MDBTabItem
      >
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2"
        >Flower of Life</MDBTabItem
      >
      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3"
        >Plume of Death</MDBTabItem
      >
      <MDBTabItem :wrap="false" tabId="ex4-4" href="ex4-4"
        >Sands of Eon</MDBTabItem
      >
      <MDBTabItem :wrap="false" tabId="ex4-5" href="ex4-5"
        >Goblet of Eonothem</MDBTabItem
      >
      <MDBTabItem :wrap="false" tabId="ex4-5" href="ex4-6"
        >Circlet of Logos</MDBTabItem
      >
    </MDBTabNav>

    <MDBTabContent>
      <MDBTabPane tabId="ex4-1">
        <p class="h4">2 set effect</p>
        <p>{{ artifactDetails["2pc"] }}</p>
        <p class="h4">4 set effect</p>
        <p>{{ artifactDetails["4pc"] }}</p>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-2">
        <MDBCard class="mb-3">
          <MDBRow class="g-0">
            <MDBCol md="4">
              <img
                class="img-fluid"
                :src="artifactDetails.images.flower"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{{ artifactDetails.flower.name }}</MDBCardTitle>
                <MDBCardText>
                  <p>{{ artifactDetails.flower.description }}</p>
                  <p class="h4">Story</p>
                  <p>{{ artifactDetails.flower.story }}</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-3">
        <MDBCard class="mb-3">
          <MDBRow class="g-0">
            <MDBCol md="4">
              <img
                class="img-fluid"
                :src="artifactDetails.images.plume"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{{ artifactDetails.plume.name }}</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-4">Tab 3 content</MDBTabPane>
      <MDBTabPane tabId="ex4-5">Tab 3 content</MDBTabPane>
      <MDBTabPane tabId="ex4-6">Tab 3 content</MDBTabPane>
    </MDBTabContent>
  </MDBTabs>
</template>

<script>
import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-vue-ui-kit";
import genshindb from "genshin-db";
import { ref } from "vue";
export default {
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  },
  props: {
    artifact: String,
  },
  setup() {
    const activeTabId4 = ref("ex4-1");
    return {
      activeTabId4,
    };
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
      console.log(this.artifactDetails);
    },
  },
};
</script>
