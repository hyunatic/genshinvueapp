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
      <MDBTabItem :wrap="false" tabId="ex4-6" href="ex4-6"
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
                  <p class="h4">Story</p>
                  <p>{{ artifactDetails.plume.story }}</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-4">
        <MDBCard class="mb-3">
          <MDBRow class="g-0">
            <MDBCol md="4">
              <img
                class="img-fluid"
                :src="artifactDetails.images.sands"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{{ artifactDetails.sands.name }}</MDBCardTitle>
                <MDBCardText>
                  <p class="h4">Story</p>
                  <p>{{ artifactDetails.sands.story }}</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-5">
        <MDBCard class="mb-3">
          <MDBRow class="g-0">
            <MDBCol md="4">
              <img
                class="img-fluid"
                :src="artifactDetails.images.goblet"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{{ artifactDetails.goblet.name }}</MDBCardTitle>
                <MDBCardText>
                  <p class="h4">Story</p>
                  <p>{{ artifactDetails.goblet.story }}</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
      <MDBTabPane tabId="ex4-6">
        <MDBCard class="mb-3">
          <MDBRow class="g-0">
            <MDBCol md="4">
              <img
                class="img-fluid"
                :src="artifactDetails.images.circlet"
                alt=""
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{{ artifactDetails.circlet.name }}</MDBCardTitle>
                <MDBCardText>
                  <p class="h4">Story</p>
                  <p>{{ artifactDetails.circlet.story }}</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBTabPane>
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
