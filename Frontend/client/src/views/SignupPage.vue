<template>
  
  <!-- Auth content -->
  <div id="auth-content" class="auth__content hide">
    <div class="auth__content-inner">
      <h1 class="auth__heading">Đăng Kí</h1>
      
      <form class="form auth__form" @submit.prevent="signup">
        <div class="form__group">
          <div class="form__text-input">
            <input type="name" name="" id="name" placeholder="Tên" class="form__input" v-model="name" required/>
            <!-- <img src="../assets/icons/icon-user.png" alt="" class="form__input-icon" /> -->
            <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
          </div>
          <p class="form__error">Email is not in correct format</p>
        </div>
        <div class="form__group">
          <div class="form__text-input">
            <input type="email" name="" id="" placeholder="Email" v-model="email" class="form__input" required />
            <img src="../assets/icons/message.svg" alt="" class="form__input-icon" />
            <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
          </div>
          <p class="form__error">Email is not in correct format</p>
        </div>
        <div class="form__group">
          <div class="form__text-input">
            <input type="password" name="" id="password" placeholder="Password" class="form__input" v-model="password" required />
            <img src="../assets/icons/lock.svg" alt="" class="form__input-icon" />
            <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
          </div>
          <p class="form__error">Password must be at least 6 characters</p>
        </div>
        <div class="form__group">
          <div class="form__text-input">
            <input type="password" name="" id="confirm-password" v-model="confirmPassword"  placeholder="Confirm password" class="form__input" required
              minlength="6" />
            <img src="../assets/icons/lock.svg" alt="" class="form__input-icon" />
            <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
          </div>
          <p class="form__error">Password must be at least 6 characters</p>
        </div>
        <div class="form__group form__group--inline">
          <label class="form__checkbox">
            <input type="checkbox" name="" class="form__checkbox-input d-none" id="confirm-password"
              />
            <span class="form__checkbox-label">Set as default card</span>
          </label>
        </div>
        <div class="form__group auth__btn-group">
          <button class="btn btn--primary auth__btn form__submit-btn" >Đăng Kí</button>

          <button class="btn btn--outline auth__btn btn--no-margin">
            <img src="../assets/icons/google.svg" alt="" class="btn__icon icon" />
            Sign in with Google
          </button>
        </div>
      </form>

      <p class="auth__text">
        You have an account yet?
        <a href="../sign-in.html" class="auth__link auth__text-link">Sign In</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signupPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signup() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await axios.post("/api/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log("Signup successful:", response.data);
        // Redirect to login page
        this.$router.push("/login");
      } catch (error) {
        console.error("Signup failed:", error.response.data);
        alert("Signup failed. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
/* .signup-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-form {
  width: 400px;
  padding: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="name"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button[type="submit"] {
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: #f96f3a;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px auto;
}

#login-link {
  text-decoration: none;
  color: rgb(72, 152, 255);
  text-align: center;
} */
</style>
