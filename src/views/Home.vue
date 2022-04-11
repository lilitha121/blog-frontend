<template>
  <section
    class="vh-100 bg-image body "
  
  >
  <div class="space text-center text-white font-content gradient-custom-3">
    <div
      class="cover-container space d-flex w-100 pt-5 mx-auto flex-column text-center"
    >
      <div class="context">
        <h1>Beauty Blogs</h1>
        <br /><br />
        <p class="lead">
          <router-link :to="{ name: 'Login' }">
            <button id="submit" type="submit" class="btn btn-secondary mb-5">
              View Now
            </button>
          </router-link>
        </p>
      </div>

     
    </div>
  </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Exo:400,700");
.space{

  padding: 8%;
}

.body {
      background: linear-gradient(0deg,rgba(44,62,80,.6),rgba(44,62,80,.6)),url(https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-1296x728-header.jpg);
}

.context {
  width: 100%;
  /* position: absolute; */
  z-index: 100;
}

button{
  padding: 4%;
}
@media only screen and (min-width: 1200px) {
  .context h1 {
  text-align: center;
  color: white;
  font-size: 120px;
}
}



@media only screen and (max-width: 600px) {
  h1 {
    padding-top: 50%;
    font-size: 60px;
    color: white;
  }
}


</style>
