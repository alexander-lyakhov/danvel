<template lang="pug">
input-text(
  title="ID номер",
  id="id",
  v-model="id",
)
div.text {{ id }}

input-text(
  title="Name",
  id="name",
  v-model="name",
)
div.text {{ name }}

input-password(
  title="Password",
  id="password",
  v-model="password",
)
div.text {{ password }}

input-email(
  title="Emil",
  id="emil",
  v-model="email",
)
div.text {{ email }}

input-search(
  id="search",
  v-model="search",
)
div.text {{ search }}
</template>

<script>
import { ref } from 'vue'
import inputText from '@/components/ui/form/input-text.vue'
import inputPassword from '@/components/ui/form/input-password.vue'
import inputEmail from '@/components/ui/form/input-email.vue'
import inputSearch from '@/components/ui/form/input-search.vue'
export default {
  name: "Home",

  components: {
    inputText,
    inputPassword,
    inputEmail,
    inputSearch,
  },

  setup() {
    const id = ref('')
    const name = ref('')
    const password = ref('')
    const email = ref('')
    const search = ref('')

    return {
      id,
      name,
      password,
      email,
      search,
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 32px;
  color: #a0a0a0;
  margin: 8px 0;
}
</style>
