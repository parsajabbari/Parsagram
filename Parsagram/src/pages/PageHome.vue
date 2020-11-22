<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card v-for="post in posts" v-bind:key="post.id" class="card-post q-mb-md" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>genteelgentile</q-item-label>
          <q-item-label caption>
            {{post.location}}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-img
        v-bind:src="post.imageUrl"
      />
      <q-card-section>
        <div>{{post.caption}}</div>
        <div class="text-caption text-grey">{{post.date | niceDate}}</div>
      </q-card-section>
    </q-card>
      </div>
      <div class="col-4 large-screen-only">
      <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="48px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>genteelgentile</q-item-label>
          <q-item-label caption>
            Parsa Jabbari
          </q-item-label>
        </q-item-section>
      </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "Golden Gate Bridge",
          date: 1606026117133,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: 2,
          caption: "Golden Gate Bridge",
          date: 1606026117133,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: 3,
          caption: "Golden Gate Bridge",
          date: 1606026117133,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        },
        {
          id: 4,
          caption: "Golden Gate Bridge",
          date: 1606026117133,
          location: "San Francisco, United States",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg"
        }
      ]
    }
  },
  filters: {
    niceDate(timeStamp) {
      return date.formatDate(timeStamp, 'MMMM D h:mm A')
    }
  }
}
</script>

<style lang="sass">
  .card-post
    .q-img
      min-height: 200px

</style>
