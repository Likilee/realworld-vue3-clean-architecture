<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">conduit</RouterLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <RouterLink class="nav-link" :to="{ name: '/about' }">Home</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""> <i class="ion-compose"></i>&nbsp;New Article </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""> <i class="ion-gear-a"></i>&nbsp;Settings </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Sign in</a>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: '/register' }">Sign up</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
