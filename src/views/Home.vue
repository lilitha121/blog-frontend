<template>
<div class="row">
  <div v-for="blog in blogs" :key="blog" class="card mb-2 col-lg-4 col-md-4 col-sm-6 col-xs-1">
    <img :src="blog.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ blog.title }}</h5>
      <p class="card-text">
        {{ blog.price }}
      </p>
      <p class="card-text">
        {{ blog.description }}
      </p>

      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  </div>


</template>
<script>
export default {
  
  data() {
    return {
      blogs: [],
    //   cart: [],
    };
  },
  mounted() {
    fetch("https://blogs-lilly.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        this.blogs = data;
        console.log(data, this.blogs);
      });
  },
}
</script>