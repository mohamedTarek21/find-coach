<template>
  <the-Header></the-Header>
  <router-view></router-view>
</template>

<script>
import theHeader from './components/layout/theHeader.vue';
export default {
  components: {
    theHeader,
  },
};
</script>

<style>
body {
  margin: 0px;
}
</style>
