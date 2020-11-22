<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img class="full-width" src="https://cdn.quasar.dev/img/parallax2.jpg" />
    </div>
    <div class="q-pa-md text-center">
      <q-btn round color="grey-10" size="lg" icon="eva-camera" />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input v-model="post.caption" label="Caption" class="col col-sm-6" dense />
    </div>
    <div class="row justify-center q-ma-md">
      <q-input v-model="post.label" label="Location" class="col col-sm-6" dense>
        <template v-slot:append>
          <q-btn round dense flat icon="eva-navigation-2-outline" />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn unelevated rounded color="primary" label="Post Image" />
    </div>
    
  </q-page>
</template>

<script>
import {uid} from "quasar"
export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now()
      }
    }
  }
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
