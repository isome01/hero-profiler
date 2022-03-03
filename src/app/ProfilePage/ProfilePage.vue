<script>
  import PageCover from '../common/components/PageCover.vue'
  import SlickCarousel from '../common/components/SlickCarousel.vue'
  import {getProfileById} from './api'

  export default {
    name: 'ProfilePage',
    components: {
      PageCover,
      SlickCarousel
    },
    props: {
      width: {
        type: String,
        required: false,
        default: '100%'
      },
      id: {
        type: String,
        required: false,
        default: 'lol'
      },
    },
    mounted() {
      getProfileById('621e9e0dae0c9ea26de3f38b')
          .then(res => {
            this.avatar = res
          })
    },
    methods() {
      return {getProfileById}
    },
    data() {
      return {
        avatar: {}
      }
    }
  }
</script>

<template>
  <div class="profile-page-bg row steel-rose-regalia" :id="`${id}`">
    <div class="profile-page-item col-sm-5 ml-auto">
      <img
        :src="`${avatar.profile_pic_url}`"
        :alt="`${avatar.name}`"
      >
      <h3>{{ avatar.name }}</h3>
      <h3>{{ avatar.title }}</h3>
    </div>
    <div class="profile-page-item col-sm-5 mr-auto">
      <h3 class="steel-rose-regalia-header">Sex: {{ avatar.sex }}</h3>
      <h3>Age: {{ avatar.age }}</h3>
      <br />
      <h3>Affiliation: {{ avatar.affiliation }}</h3>

    </div>
    <div class="profile-page-item col-sm-10 m-auto row">
      <h3>Media</h3>
      <div class="profile-page-item col-sm-3" v-for="url in avatar.art_media_urls">
        <img :src="`${url}`" :alt="`${url}`" />
      </div>
      <br />
      <h3>BIO</h3>
      <p>{{avatar.bio}}</p>
    </div>
    <PageCover
        v-bind:class="`row`"
        v-bind:pageTintDarkness="`darkest`"
        v-bind:imageURL="`${'https://storage.googleapis.com/hero-profiles-bucket/nishia-griffinheart/profile/ali-creation-nishia-1.2.png'}`"
    />
  </div>
</template>

<style>
  .profile-page-bg {
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: #310;
  }
  .profile-page-item {
    padding: 15px;
    border: solid 1px #eee;
    box-shadow: 0 0 2px;
    background-color: white;
  }

  .profile-page-item > img {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 150px;
    border: solid black 1px;
  }
</style>