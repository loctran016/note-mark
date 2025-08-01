<template>
  <div class="min-w-screen min-h-screen wrapper font-[Open_Sans]">
    <NavBar></NavBar>
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  /* background-color: hsl(48, 29%, 97%); */
  font-family:
    "Open Sans", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
