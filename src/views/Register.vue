<template>
  <section
    class="vh-100 "
      style="
    "
  >
    <div class="mask d-flex align-items-center h-100 gradient-custom-3 p-4 space">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card secondary" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5 white">
                  Create an account
                </h2>

                <form @submit.prevent="register">
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
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                       v-model="email"
                placeholder="Email Adress"
                required
                    />
                    <label class="form-label white" for="form3Example3cg"
                      >Your Email</label
                    >
                  </div>

                  
                  <div class="form-outline mb-4">
                    <input
                      type="phone_number"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                       v-model="phone_number"
                placeholder="Phone Number"
                required
                    />
                    <label class="form-label white" for="form3Example3cg"
                      >Your Phone Number</label
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
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0 white">
                    Have already an account?
                 
                  <router-link :to="{ name: 'Login' }" class="fw-bold text-body">
                    <br>
                    Login
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
      email: "",
      phone_number: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://blogs-lilly.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
          fullname: this.fullname,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      
        .then((response) => response.json())
        .then((user) => {
             if(user.message) {
            alert(user.message)
          }
          else {
          localStorage.getItem("jwt", user.jwt);
                    alert("User registered");

          this.$router.push({ name: "Login" });
          }
        })
             
    },
  },
};
</script>

<style scoped>

.card{
  background-color: grey;
}
.white{
  color: white;
}

</style>