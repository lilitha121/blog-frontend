<template>
    <div class="container">
    <div class="row">
       <div class="section-heading">
            <h6>Get In Touch</h6>
            <h1>Profile.</h1>
            <span>Contact</span>
          </div>
        <div class="col-md-5">
            <div class="row">
                <div class="col-12 bg-white p-0 px-3 py-3 mb-3">
                    <div class="d-flex flex-column align-items-center"> <img class="photo" src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
                        <p class="fw-bold h4 mt-3">{{fullname}}</p>
                        <p class="text-muted">Full Stack Developer</p>
                        <p class="text-muted mb-3">Soma,San Francisco, CA</p>
                        <div class="d-flex ">
                            <div class="btn btn-primary follow me-2">Follow</div>
<div class="btn btn-outline-primary message">
                              <router-link
                  :to="{ name: 'Contact' }"
                  class="text-decoration-none"
                >
                     Message
                  </router-link>
                       
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 bg-white p-0 px-2 pb-3 mb-3">
                     <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Full Name</p>
                        <p class="py-2 text-muted">{{ fullname }}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Email</p>
                        <p class="py-2 text-muted">{{email}}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <p class="py-2">Phone</p>
                        <p class="py-2 text-muted">{{phone_number}}</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

            fullname: localStorage.getItem("fullname"),
            email: localStorage.getItem("email"),
            phone_number: localStorage.getItem("phone_number")


        }
    },
}
</script>
<style >
    
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 14px
}

.section-heading {
  margin-bottom: 80px;
  position: relative;
  text-align: center;
}
.section-heading h6 {
  color: #47bb8e;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 14px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

h6 {
  line-height: 1.4;
}
.section-heading h1 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 8px rgb(0 0 0 / 5%);
  text-transform: uppercase;
}
.section-heading span {
  color: transparent;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 10vw;
  font-weight: 700;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
  opacity: 0.6;
}

h1 {
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0;
}

.breadcrumb {
    background-color: #c5cee4
}

.breadcrumb a {
    text-decoration: none
}

.container {
    max-width: 1000px;
    padding: 0
}

p {
    margin: 0
}

.d-flex a {
    text-decoration: none;
    color: #686868
}

img {
    width: 100px;
    height: 100px;
    /* border-radius: 50%; */
    object-fit: cover
}

.fab.fa-twitter {
    color: #8ab7f1
}

.fab.fa-instagram {
    color: #E1306C
}

.fab.fa-facebook-f {
    color: #5999ec
}

</style>