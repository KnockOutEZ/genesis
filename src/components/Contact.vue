<template>
  <section id="contact" class="container mx-auto">
    <div class="header text-center">
      <span class="subtitle">CONTACT</span>
      <h1>Contact With Me</h1>
    </div>

    <br /><br /><br />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 mx-5 md:mx-0">
      <div class="card rounded-lg shadow-lg">
        <div class="cardImg">
          <img
            src="../assets/images/contact1.png"
            alt=""
            class="rounded-t-lg"
          />
        </div>
        <div class="pt-5">
          <h4>Towhid Khan</h4>
          <p class="mb-5">Software Developer</p>
          <p class="mb-5">
            Connect with me via an email or in my social accounts.
          </p>

          <p>
            Phone: <a class="p" href="tel:+8801979415290">+8801979415290</a>
          </p>
          <p>
            Email:
            <a class="p" href="mailto:ktowhid20@gmail.com"
              >ktowhid20@gmail.com</a
            >
          </p>
        </div>
        <div class="find mt-8">
          <p class="findwithme">FIND WITH ME</p>
          <div class="flex mt-3">
            <a
              href="https://www.facebook.com/towhid.khan.9699"
              target="__blank"
              class="flex-initial social-buttons mr-5 px-5 py-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.github.com/KnockOutEZ/"
              target="__blank"
              class="flex-initial social-buttons mx-5 px-4 py-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 16 18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/towhid-khan-b2504b207/"
              target="__blank"
              class="flex-initial social-buttons mx-5 px-5 py-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="card md:col-span-2 md:mx-10 p-10">
        <form
          action="mailto:ktowhid20@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label for="name">YOUR NAME</label>
              <br />
              <input name="Name" type="text" />
            </div>
            <div>
              <label for="number">PHONE NUMBER</label> <br />
              <input name="Phone Number" type="text" />
            </div>
          </div>
          <br /><label for="email">EMAIL</label>
          <br />
          <input type="email" name="Email" />
          <br /><br /><label for="subject">SUBJECT</label>
          <br />
          <input name="Subject" type="text" />
          <br /><br /><label for="message">YOUR MESSAGE</label>
          <br />
          <textarea name="Message Description"></textarea>

          <button type="submit" class="submit py-5 mt-5">
            SEND MESSAGE
            <i class="fa fa-arrow-right arrow pl-2" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  </section>

  <br /><br /><br /><br />
  <div class="container mx-auto">
    <hr />
  </div>

  <br /><br /><br /><br />
  <h1 class="text-center">Genesis</h1>
  <p class="text-center">© {{ currentYear }}. All rights reserved</p>
  <br /><br /><br /><br /><br />
</template>

<script>
export default {
  name: "contact",
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.submit:hover {
  transform: translateY(-5px);
  background: linear-gradient(to right bottom, #212428, #16181c);
}

.submit {
  cursor: none;
}

.arrow {
  transform: scale(0, 0);
  transition: 0.4s;
}

.submit:hover > .arrow {
  transform: scale(1.2, 1.2);
  transition: 0.4s;
}

.submit {
  border-radius: 6px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.4s;
  font-size: 14px;
  font-weight: 500;
  border: 0 none;
  width: 100%;
  color: #f9004d;
}
label {
  font-size: 12px;
  color: #a0a8b3;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
  text-align: left;
}
textarea {
  resize: none;
  margin-top: 18px;
  background-color: #191b1e;
  border-radius: 6px;
  height: 200px;
  transition: 0.4s;
  border: 2px solid #191b1e;
  padding: 15px;
  font-size: 14px;
  color: #c4cfde;
  box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
    -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
  letter-spacing: 1px;
  width: 100%;
}
textarea:focus {
  border: #f9004d 2px solid;
  outline: none;
}
input {
  margin-top: 18px;
  width: 100%;
  background-color: #191b1e;
  border-radius: 6px;
  height: 55px;
  transition: 0.4s;
  border: 2px solid #191b1e;
  padding: 0 15px;
  font-size: 14px;
  color: #c4cfde;
  box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
    -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
  letter-spacing: 1px;
}

input:focus {
  border: #f9004d 2px solid;
  outline: none;
}

.social-buttons:hover {
  transform: translateY(-3px);
  transition: 0.4s ease-in-out;
  background: rgb(24, 24, 24);
}

.social-buttons {
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #2c2a2e;
}

.findwithme {
  font-size: 14px;
  font-weight: 400;
  color: #878e99;
  line-height: 30px;
}
.p {
  font-size: 18px;
  font-weight: 400;
  color: white;
  line-height: 30px;
}
.p:hover {
  font-size: 18px;
  font-weight: 400;
  color: #f9004d;
  line-height: 30px;
  transition: 0.4s;
}
p {
  font-size: 18px;
  font-weight: 400;
  color: #878e99;
  line-height: 30px;
}

h4 {
  font-size: 29px;
  line-height: 44px;
  color: #e4e6ea;
  margin-bottom: 9px;
  font-weight: 700;
}
.card {
  background: #212428;
  text-align: left;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
}

.subtitle {
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 25px;
}

h1 {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #c4cfde;
  margin-top: 15px;
  margin-bottom: 0;
}
</style>
