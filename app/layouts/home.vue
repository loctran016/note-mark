<script></script>
<template>
  <div class="w-screen h-screen wrapper-home overflow-hidden">
    <NavBar></NavBar>
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.wrapper-home::before {
  content: "";
  background-image: url("/bg.svg");
  background-size: cover; /* Example */
  background-repeat: no-repeat; /* Example */
  background-position: center; /* Example */
  /* min-height: 100vh;
  min-width: 100vw; */
  position: absolute;
}
</style>
