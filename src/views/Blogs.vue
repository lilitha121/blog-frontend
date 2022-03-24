<template>
  <!-- <hr class="dashed" /> -->
  <section>
    <!-- <div class="row row-cols-1 row projects g-4 pt pad"> -->
    <div class="section-heading">
      <h1>My Works.</h1>
      <span>Portfolio</span>
    </div>
    <br />
    <br />
    <br />

    <button
      type="button"
      class="button btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addBlogModal"
    >
      add modal
    </button>
    <Add />  
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row mb-2 bg-light" v-for="blog in blogs" :key="blog">
          <button
            type="button"
            class="button btn-primary"
             data-bs-toggle="modal"
      data-bs-target="#editBlogModal"
          >
            Update blog
          </button>
    <Edit :blog="blog" />
   <button
            type="button"
            class="button btn-primary"
            v-on:click="removeBlog(blog._id)"
          >
            Delete blog
          </button>
          <div class="col-lg-6">
            <img :src="blog.img" class="d-block w-100" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="d-flex flex-column justify-content-center my-5 px-3">
              <p class="review text-center">{{ blog.title }}</p>
              <div
                class="name d-flex align-items-center justify-content-center"
              >
                <span class="fas fa-minus pe-1"></span>
                <p class="m-0">{{ blog.content }}</p>
              </div>
              <a class="job text-center">READ MORE...</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space"></div>
  </section>

 

</template>

<script>
import Add from '../components/Add.vue'
import Edit from '../components/Edit.vue'

export default {
  components: { Add, Edit },
  data() {
    return {
      blogs: [],
      title: "",
      price: "",
      img: "",
      content: "",
    };
  },

  methods: {
   
    removeBlog(id) {
      console.log(id);
      fetch("https://blogs-lilly.herokuapp.com/blogs/" + id, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Blog deleted successfully");
      //   localStorage.getItem("jwt", data.jwt);
      //   this.$router.push({ name: "Login" });
      })
      .catch((err) => {
        alert(err);
      });
    },
       },
  mounted() {
    fetch("https://blogs-lilly.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        this.blogs = data;
        console.log(data, this.blogs);
      });
  },
};
</script>

<style>
/* .pad {
  padding: 15%;
}
.pt {
  padding-top: 10% !important;
}
.space {
  padding-bottom: 20%;
}

.projects {
  height: 130vh !important;
} */

img {
  width: 100% !important;
  height: 100% !important;
}

body {
  /* background-color: #e7dfcf; */
  position: relative;
  margin: 20px 30px;
}

.container {
  max-width: 800px;
  background-color: white;
  padding: 0;
}

.review {
  font-size: 30px;
  font-weight: 600;
  padding: 30px 0;
}

.name {
  font-size: 18px;
  color: #c1e718;
  margin: 0;
}

.job {
  color: #c8c8c8;
  font-size: 14px;
}

.carousel-inner {
  max-width: 800px;
}

.fa-minus {
  font-size: 14px;
}

.carousel-indicators {
  bottom: -20px;
  right: 0;
  margin: 0;
}

.carousel-indicators [data-bs-target] {
  height: 10px;
  border: 2px solid black;
  width: 10px;
  background-color: inherit;
  border-radius: 50%;
}

.carousel-indicators .active {
  border: 2px solid transparent;
  background-color: #c1e718;
}

.left {
  color: rgb(20, 20, 20);
  font-weight: 600;
}

.right {
  color: rgb(12, 12, 12);
  font-weight: 600;
}

.carousel-control-next,
.carousel-control-prev {
  position: relative;
}

@media (max-width: 560px) {
  .review {
    font-size: 14px;
    font-weight: 600;
  }

  .name {
    font-size: 13px;
  }

  .job {
    font-size: 10px;
  }

  .right {
    font-size: 12px;
  }

  .left {
    font-size: 12px;
  }

  .carousel-indicators [data-bs-target] {
    height: 8px;
    border: 1px solid black;
    width: 8px;
    background-color: inherit;
    border-radius: 50%;
  }

  .carousel-indicators .active {
    border: 1px solid transparent;
    background-color: #c1e718;
  }
}
</style>
