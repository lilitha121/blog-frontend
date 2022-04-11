<template>
  <section
    class="vh-100 bg-image"
    style="
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3 space">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card bg" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5 white">
                  Login account
                </h2>

                <form @submit.prevent="Login()">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                       v-model="fullname"
                placeholder="Fullname"
                required
                    />
                    <label class="form-label white" for="form3Example1cg"
                      >Your Name</label
                    >
                  </div>

                 

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                         v-model="password"
                placeholder="password"
                required
                    />
                    <label class="form-label white" for="form3Example4cg"
                      >Password</label
                    >
                  </div>

                 <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Login
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0 white">
                    Don't have an account?
                 
                  <router-link :to="{ name: 'Register' }" class="fw-bold text-body">
                    <br>
                    Register
              </router-link
              >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      
      fullname: "",
      password: "",
    };
  },
  methods: {
    Login() {
      console.log('test')
      const details = {
        fullname: this.fullname,
        password: this.password,
      };

      fetch("https://blogs-lilly.herokuapp.com/user/signin", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => {
          console.log(user)
          if(user.message) {
            alert(user.message)
          }
          else {

            localStorage.setItem("jwt", user.accessToken);
            localStorage.setItem("id", user.id);
            localStorage.setItem("fullname", user.fullname);
            localStorage.setItem("email", user.email);
            localStorage.setItem("phone_number", user.phone_number);
  
            alert("Logged in successfully");
  
            this.$router.push({ name: "Blogs" });
          }
        })
      .catch((err) => {
  this.errorMessage = err.message
})
    },
  },
};
</script>


<style scoped>
.bg {
  background-color: grey;
}
.white{
  color: white;
}
.space{
  padding: 7%;
}
</style>
