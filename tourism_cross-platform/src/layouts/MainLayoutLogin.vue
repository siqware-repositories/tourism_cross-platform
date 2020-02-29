<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayoutLogin',
  data () {
    return {}
  }
}
</script>
