<template>
  <div class="container">
    <div class="row space">
      <div class="section-heading">
        <h1>Profile.</h1>
        <span>Profile</span>
      </div>
      <div class="col-md-5  ">
        <div class="row align-items-center card4 ">
          <div class="col-6 bg-pink p-0 px-3 py-3 mb-3 ">
            <div class="d-flex flex-column align-items-center">
              <img
                class="photo"
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
              <p class="fw-bold h4 mt-3">{{ fullname }}</p>
              
              <div class="d-flex">
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
        <div class="col-6">
          <div class=" bg-pink p-0 px-2 pb-1 mb-3">
               <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">id</p>
              <p class="py-2 text-muted">{{ id }}</p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">Full Name</p>
              <p class="py-2 text-muted">{{ fullname }}</p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">Email</p>
              <p class="py-2 text-muted">{{ email }}</p>
            </div>
            <div
              class="d-flex align-items-center justify-content-between border-bottom"
            >
              <p class="py-2">Phone</p>
              <p class="py-2 text-muted">{{ phone_number }}</p>
            </div>
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
            id: localStorage.getItem("id"),

      fullname: localStorage.getItem("fullname"),
      email: localStorage.getItem("email"),
      phone_number: localStorage.getItem("phone_number"),
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.space {
  padding: 15%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
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
  background-color: #c5cee4;
}

.breadcrumb a {
  text-decoration: none;
}

.container {
  max-width: 1000px;
  padding: 0;
}

p {
  margin: 0;
}

.d-flex a {
  text-decoration: none;
  color: #686868;
}

img {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  object-fit: cover;
}

.fab.fa-twitter {
  color: #8ab7f1;
}

.fab.fa-instagram {
  color: #e1306c;
}

.fab.fa-facebook-f {
  color: #5999ec;
}

body{
    margin-top:20px;  
    background:pink
}

.thumb img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.post-user img {
  border: 3px solid white;
}

.widget {
  position: relative;
  margin-bottom: 30px;
  padding: 15px 20px;
  background: #fff;
  border-radius: 3px;
}

.widget-controls {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 14px;
  font-size: 12px;
}

.widget-controls>a {
  padding: 1px 4px;
  border-radius: 4px;
  color: rgba(0,0,0,0.4);
  -webkit-transition: color 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out;
  transition: color 0.15s ease-in-out;
}

.thumb {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 48px;
}

.thumb img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.post-user img {
  border: 3px solid white;
}

.fs-mini {
  font-size: 13px;
}

.bg-danger, .bg-info {
  -webkit-transition: background-color 0.15s ease-in-out;
  -o-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
}

.bg-danger {
  background-color: #dd5826;
}

.bg-info {
  background-color: #39bbdb;;
}

.text-white {
  color: #fff;
}

 .widget-middle-overflow {
  position: relative;
  margin: 0 -20px;
}

.windget-padding-md {
  padding: 15px 20px;
}

.mb-lg {
  margin-bottom: 30px;
}

.mt-lg {
  margin-top: 30px;
}

.fw-semi-bold {
  font-weight: 600;
}

.tags {
  padding-left: 0;
  list-style: none;
}

.tags>li>a {
  padding: 2px 8px;
  font-size: 13px;
  border-radius: 6px;
  border: 1px solid white;
  color: inherit;
  text-decoration: none;
}

.fs-mini {
  font-size: 13px;
}

.text-light {
  opacity: .8;
}

.mt-sm {
  margin-top: 10px;
}

.bg-body-light {
  background-color: #f6f6f6;
}

.widget > footer {
  margin: 0 -20px -15px;
  padding: 30px 20px;
}

.post-links {
  margin-bottom: 0;
  font-size: 12px;
  padding-left: 0;
}

.post-links>li {
  float: left;
  list-style: none;
  margin:8px;
}

.post-links>li>a {
  text-decoration: none;
  color: #999;
}
.card4 {
  border: 3px solid #fff !important;
  padding-bottom: 500px;
  /* background-color: #152733; */
  color: white;
  min-width: 540px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  height: 40% !important;
}
</style>
