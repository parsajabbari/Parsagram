<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar class="constrain">
        <q-btn flat round dense to="/camera" size="18px" icon="eva-camera-outline" class="large-screen-only q-mr-sm" />
        <q-separator vertical spaced class="large-screen-only" />
        <q-toolbar-title class="text-grand-hotel text-bold">
          Parsagram
        </q-toolbar-title>
        <q-btn flat round dense to="/" size="18px" icon="eva-home-outline" class="large-screen-only" />

      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white small-screen-only">
      <q-tabs class="text-grey-10"
        active-color="primary"
        indicator-color="transparent">
        <q-route-tab icon="eva-home-outline" to="/"  />
        <q-route-tab icon="eva-camera-outline" to="/camera" />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass">
  .q-toolbar
    @media (min-width: $breakpoint-sm-min)
      height: 77px
  .q-toolbar__title
    @media (max-width: $breakpoint-xs-max)
      text-align: center
    font-size: 30px
  .q-footer 
    .q-tab__icon 
      font-size: 30px
</style>
