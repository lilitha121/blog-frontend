

<template>
  <div class="background d-flex space text-center text-white font-content">
    <div
      class="cover-container d-flex w-100 pt-5 mx-auto flex-column text-center"
    >
      <h1
        style="font-size: 100px;
  font-weight: 600;  text-align: center; mb-5"
      >
        Beauty Blogs 
      </h1>
      <p class="lead">
        <router-link :to="{ name: 'Login' }">
          <button id="submit" type="submit" class="btn btn-danger mb-5">
            View Now
          </button>
        </router-link>
      </p>
    </div>
  </div>
</template>


<style >
    .background {
  background: linear-gradient(
      0deg,
      rgba(44, 62, 80, 0.6),
      rgba(44, 62, 80, 0.6)
    ),url("../assets/beautyp2.jpg");
  height:90vh;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  
}
</style>