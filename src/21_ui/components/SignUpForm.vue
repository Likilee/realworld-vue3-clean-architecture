<template>
  <div class="col-md-6 offset-md-3 col-xs-12">
    <h1 class="text-xs-center">Sign up</h1>
    <p class="text-xs-center">
      <a href="">Have an account?</a>
    </p>

    <ul class="error-messages">
      <li>That email is already taken</li>
    </ul>

    <form>
      <fieldset class="form-group">
        <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="form.name" />
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="form.email" />
      </fieldset>
      <fieldset class="form-group">
        <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="form.password" />
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="handleSubmit">Sign up</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSignUp } from '@/10_application/signUp';

const signUp = useSignUp();

const form = reactive({
  name: '',
  email: '',
  password: ''
})

async function handleSubmit() {
  signUp.mutateAsync(form, {
    onError: (error) => {
      console.log(error);
    },
  });
}
</script>

<style scoped lang="scss"></style>
