<template>
  <div class="header">
    <h1>my header</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'haaa',
    }
  },
}
</script>
