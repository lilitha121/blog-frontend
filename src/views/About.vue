<template>
  <section class="section about-section gray-bg" id="about">
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="eleven">
          <h1>About me</h1>
        </div>
        <div class="col-lg-6">
          <div class="about-text go-to">
            <!-- <h4>Hey guys! I do face-beats</h4> -->
            <p>
              I love experimenting with makeup and I’m always looking to try
              out new products but that can be a hit or miss. There is that
              satisfaction that comes with using products that you know just
              work for your skin and you are guaranteed a flawless outcome – I
              love that feeling. Some of my favourite products are fairly new
              and some are my OG faves. If you follow me on my Instagram, you
              will probably be able to guess some of my current favourites.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-avatar">
            <img
              src="../assets/palela.jpg"
              title=""
              alt=""
              width="400"
              height="300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

h4 {
  align-items: center !important;
    color: pink;
    font-size: 1.1rem;
    letter-spacing: 1px;
    line-height: 1.5;
    text-transform: uppercase;
        margin-top: 10px;
    margin-bottom: 10px;
        display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.text-left {
    text-align: left;
}
/*heading  */
h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

.eleven h1 {
  font-size: 30px;
  text-align: center;
  line-height: 1.5em;
  padding-bottom: 45px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #111;
}

.eleven h1:before {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 60%;
  left: 50%;
  margin-left: -30%;
  height: 1px;
  content: "";
  background-color: #777;
  z-index: 4;
}
.eleven h1:after {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;
  margin-left: -20px;
  bottom: 0px;
  content: "\00a7";
  font-size: 30px;
  line-height: 40px;
  color: pink;
  font-weight: 400;
  z-index: 5;
  display: block;
  background-color: #f8f8f8;
}

body {
  background-color: pink;
  color: #6f8ba4;
  margin-top: 20px;
}
.section {
  padding: 100px 0;
  position: relative;
}
.gray-bg {
  background-color: #f5f5f5;
}
img {
  max-width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
/* About Me 
---------------------*/
.about-text h3 {
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 6px;
}
@media (max-width: 767px) {
  .about-text h3 {
    font-size: 35px;
  }
}
.about-text h6 {
  font-weight: 600;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .about-text h6 {
    font-size: 18px;
  }
}
.about-text p {
  font-size: 18px;
  max-width: 450px;
}
.about-text p mark {
  font-weight: 600;
  color: #20247b;
}

.about-list {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #20247b;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}
.about-list label:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 11px;
  width: 1px;
  height: 12px;
  background: #20247b;
  -moz-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  margin: auto;
  opacity: 0.5;
}
.about-list p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 991px) {
  .about-avatar {
    margin-top: 30px;
  }
}

.about-section .counter {
  padding: 22px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
}
.about-section .counter .count-data {
  margin-top: 10px;
  margin-bottom: 10px;
}
.about-section .counter .count {
  font-weight: 700;
  color: #20247b;
  margin: 0 0 5px;
}
.about-section .counter p {
  font-weight: 600;
  margin: 0;
}
mark {
  background-image: linear-gradient(
    rgba(252, 83, 86, 0.6),
    rgba(252, 83, 86, 0.6)
  );
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-color: transparent;
  padding: 0;
  color: currentColor;
}
.theme-color {
  color: #fc5356;
}
.dark-color {
  color: #20247b;
}
</style>
