<template>
     <!-- add blog -->
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
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
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
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" v-on:click="addBlog()">
            Save changes
          </button>
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
      price: "",
      img: "",
      content: "",
        }
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
}
</script>