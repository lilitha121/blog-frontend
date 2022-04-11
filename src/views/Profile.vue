<template>
<section
   class="vh-100  space"
    
   
>
  <div class="container">
    <div class="row ">
      <div class="section-heading ">
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
  </section>
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.space{
  padding: 10%;
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



.section-heading h1 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 8px rgb(0 0 0 / 5%);
  text-transform: uppercase;
}


h1 {
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0;
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
  object-fit: cover;
}



body{
    margin-top:20px;  
}


.fs-mini {
  font-size: 13px;
}

.text-white {
  color: grey;
}

.mt-sm {
  margin-top: 10px;
}

.card4 {
  border: 3px solid grey !important;
  display: grid;
  color: grey;
  min-width: 540px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  justify-content: center;
}


@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 .card4[data-v-ced23842] {
    border: 3px solid grey !important;
    padding-bottom: 500px;
    justify-content: center;
    color: grey;
    width: 100%;
    border-radius: 10px;
    height: 40% !important;

}
}

</style>
