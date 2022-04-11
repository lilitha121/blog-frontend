<template id="app"  class='gradient-custom-3'>
  <section>
    <div id="nav  a.router-link-exact-active  " class="background">
      <nav class="fixed-top p-3 navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <!-- >        <img src="./assets/download.jpg" alt="" width="45 !important" height="44 !important" class="d-inline-block align-text-top"> -->
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div
              class="navbar-nav me-auto mb-2 mb-lg-0 d-flex"
              style="display: flex !important"
            >
              <router-link to="/" class="nav-item nav-link d-flex"
                >Home</router-link
              >

              <router-link to="/Register" class="nav-link d-flex"
                >Register</router-link
              >
              <router-link to="/Login" class="nav-item nav-link d-flex me-2"
                >Login</router-link
              >
              <router-link to="/About" class="nav-link d-flex"
                >About us</router-link
              >

              <router-link to="/Blogs" class="nav-link d-flex"
                >Blogs</router-link
              >

              <router-link to="/Profile" class="nav-link d-flex"
                >Profile</router-link
              >

                 <router-link to="/Contact" class="nav-link d-flex"
                >Contact</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
  <router-view />
</template>
sty
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
    margin: 0px;
  padding: 0px;

}

#nav {
  padding: 30px;
}

#nav a {
  align-items: flex-end !important;
  display: flex !important;

  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: grey !important;
}
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}

</style>
