<template>
<div>
  <v-navigation-drawer
          v-model="drawer"
          fixed
          right
          app
  >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="cyan" dark fixed app>
    <v-spacer></v-spacer>
    <v-toolbar-title class="title">
      <span @click="showPanel">Vuexcard</span>
      <v-btn round small color="primary" dark class="notification-btn pulse" v-if="!visibleNotificationBtn && !wasChecked" @click="showPanel">You have updates</v-btn>
    </v-toolbar-title>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar>
</div>
</template>

<script>
export default {
  computed: {
    drawer() {
      return  false;
    },
    visibleNotificationBtn() {
      return this.$store.getters.expanded;
    },
    wasChecked() {
      return this.$store.getters.wasChecked;
    }
  },
  methods: {
    showPanel() {
      this.$store.dispatch('changePanelVisibility', true);
      if(!this.wasChecked) {
        this.$store.dispatch('makeChecked', true);
      }
    }
  }
}
</script>

<style scoped>
  .title {
    position: relative;
    overflow: visible;
    cursor: pointer;
  }
  .notification-btn {
    position: absolute;
    top: 0px;
    left: -96px;
    margin: 0;
    font-size: 8px;
    height: 12px;
  }
  .pulse {
    box-shadow: 0 0 0 rgba(204,169,44, 0.4);
    animation: shadow-pulse 1s 3;
  }
  .pulse:hover {
    animation: none;
  }

  @keyframes shadow-pulse
  {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
    }
  }
</style>
