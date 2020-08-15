<template>
  <div>
    <div v-for="item in tabs" class="item" v-bind:key="item.key">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  props:['tabs']
}
</script>

<style>

</style>