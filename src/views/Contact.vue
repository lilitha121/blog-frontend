<template>
  <section class="contact section-padding space" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h6>Get In Touch</h6>
            <h1>Contact Me.</h1>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-sm-1"></div>
        <div class="col-sm-11">
          <div class="contact-form">
            <form action="mail.php" @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <i class="bi bi-person"></i>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      v-model="name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <i class="bi bi-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <i class="bi bi-file-text"></i>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                      v-model="subject"
                    />
                  </div>
                </div>
                
                <div class="col-sm-12 text-center">
                  <div class="form-group">
                    <i class="bi bi-chat"></i>
                    <textarea
                      name="message"
                      id="message"
                      cols="15"
                      rows="5"
                      placeholder="Message"
                      required
                      v-model="message"
                    ></textarea>
              
                    <button type="submit" class="simple-btn">
                      Send Message
                    </button>
                    <p class="form-messages"></p>
                  </div>
                </div>
              </div>
            </form>
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
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.name, this.email, this.subject, this.message);
      let contact = {
        name: this.name,
        message: this.message,
        email: this.email,
        subject: this.subject,
      };
      console.log(contact);
      fetch("https://blogs-lilly.herokuapp.com/contacts", {
        method: "POST",
        //   mode: 'no-cors',
        body: JSON.stringify(contact),

        headers: {
                    "Content-type": "application/json; charset=UTF-8",

        },
      })
        .then((response) => response.json())
        .then((json) => alert(json.msg))
        .catch((e) => alert(e.msg));
    },
  },
};
</script>

<style>
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
.form-group input,
.form-group textarea {
  border: 1px solid #f1f1f1;
  margin-bottom: 30px;
  padding: 15px 15px 15px 45px;
  width: 100%;
  transition-duration: 0.3s;
}
.form-group i {
  position: absolute;
  top: 17px;
  left: 15px;
}
.contact-form {
  margin-bottom: 30px;
}
.space {
  padding: 13%;
}
</style>
