<template lang="pug">
#layout_account.layout_wrapper
  //- Content
  //- sidebar
  //- header
  Nuxt
</template>

<script>
export default {
  name: 'Account',
  middleware: 'auth',
}
</script>
