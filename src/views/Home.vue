<template>
  <section
    class="hero"
    id="home"
    style=" 
      transform: translate3d(0px, 0px, 0px);
      transform-style: preserve-3d;
      backface-visibility: hidden;
    "
  >
    <div class="container h-100">
      <div class="row position-relative h-100">
        <div class="col-md-6">
          <div class="bg"></div>
          <div class="bg bg3"></div>
          <div class="bg bg2"></div>
          <div class="hero-text">
            <h6>Hello, I'm</h6>
            <h1>Palela Hoboyi</h1>
            <h2> <i>checkout my face beat tips</i></h2>
            <div class="hero-btn">
              <a href="#contact" class="box-btn">Contact me</a>
            </div>
          </div>
          <div class="col-md-6 d-none d-sm-block">
            <div class="hero-img">
              <img src="https://i.postimg.cc/Xv8d0RNX/palela-hp-removebg-preview.png" alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#home{
  height: 92vh !important;
}
.hero {
  display: flex;
  align-items: center;
}
element.style {
  transform: translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
.hero-text {
  bottom: 50%;
  letter-spacing: 1px;
  text-align: initial;
  align-items: center;
  padding-top: 30%;
}
.hero-text h6 {
  color: #47bb8e;
  font-size: 14px;
  /* font-weight: 300; */
  letter-spacing: 5px;
  /* margin-bottom: 5px; */
  text-transform: uppercase;
}
h6 {
  display: block;
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.hero-text h6 {
  color: black;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
h6 {
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0;
}
.hero-text h1 {
  font-size: 85px;
        font-family: 'Unica One', cursive;

  /* font-family: "Cormorant Garamond", serif; */
  margin-bottom: 5px;
}
h1 {
  font-weight: 700;
  line-height: 1.4;
  /* margin-bottom: 0; */
}
.hero-text h2 {
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
}
h2 {
  /* font-weight: 700; */
  line-height: 1.4;
  margin-bottom: 0;
}
.hero {
  background-color: #f6f5ff;
  /* margin-top: 80px; */
  overflow: hidden;
  position: relative;
  height: 100vh;
  z-index: 1;
}

/* .hero-img::after {
  background-color: palevioletred;
  content: "";
  position: absolute;
  left: 10.5%;
  bottom: 35px;
  width: 79%;
  height: 10px;
} */
/* .hero-img::before {
  border: 20px solid #5347bb;
  border-bottom: none;
  content: "";
  position: absolute;
  top: 49%;
  left: 10.5%;
  width: 79%;
  height: 76%;
  transform: translateY(-40%);
  z-index: -1;
} */
.hero-img {
  position: absolute;
  border-radius: 10px;
  right: 0px;
  bottom: 0;
  width: 530px;
  padding-bottom: 8%;
}
/* img {
  align-items: center;
} */
section {
  display: block;
  /* padding-bottom: 6%; */
}

element.style {
  transform: translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.hero-btn {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.box-btn::before {
  background-color: #212529;
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 100%;
  transition-duration: 0.3s;
  z-index: -1;
}

.hero-btn a {
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
}
.box-btn {
  animation-delay: 1.2s;
  background-color: pink;
  border: 1px solid pink;
  border-radius: 4px;
  color: #ffffff;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 17px 30px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
}

a {
  text-decoration: none;
  transition-duration: 0.3s;
}

body {
  margin: 0;
}

/* .bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed; 
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3 {
  animation-duration: 5s;
} */

.content {
  /* background-color:rgba(255,255,255,.8); */
  border-radius: 15%;
  /* box-shadow:0 0 .25em rgba(0,0,0,.25); */
  box-sizing: border-box;
  /* left: 50%; */
  padding: 0.5%;
  position: fixed;
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translate(-50%, -50%);
}

h1 {
  font-family: monospace;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
