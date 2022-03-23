<template>
<section>
<div  v-for="blog in blogs"
        :key="blog" class="p-4 p-md-5 mb-4 text-white rounded bg-dark ">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div>


 Copy
    <div
    class="modal fade"
    id="addBlogModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addBlog">
        <p>Modal body text goes here.</p>

        <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="title"
                placeholder="title of blog"
                required
              />
            </div>
 <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="price"
                placeholder="price of item on blog"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="content"
                placeholder="content of blog"
                required
              />
              <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="img"
                placeholder="image link of blog"
                required
              />
            </div>
            </div>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" v-on:click="addBlog()">Save changes</button>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      blogs: [],
      title: "",
      price:"",
      img: "",
      content: "",
    };
  },

  methods: {
    addBlog() {
      fetch("https://blogs-lilly.herokuapp.com/blogs", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          img: this.img,
                    price: this.price,

          content: this.content,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Blog added");
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
}
</script>

<style>
.pad {
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
}
</style>