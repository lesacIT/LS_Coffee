<template>
  <!-- <div class="login-container">
    <form class="login-form" @submit.prevent="login">
      <h2>Đăng nhập</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
      <div>
        <router-link to="/signup" id="signup-link">
          <h4>Đăng ký nếu chưa có tài khoản</h4>
        </router-link>
      </div>
    </form>
  </div> -->
  <main class="auth">
    <!-- Auth intro -->
    <div class="auth__intro d-md-none">
      <img src="../assets/img/auth/intro.svg" alt="" class="auth__intro-img" />
      <p class="auth__intro-text">
        Sản phẩm chất lượng cao và các dịch vụ sáng tạo
      </p>
    </div>

    <!-- Auth content -->
    <div class="auth__content">
      <div class="auth__content-inner">
        <h1 class="auth__heading">Đăng Nhập</h1>
        <p class="auth__desc">
          Chào mừng bạn trở lại để đăng nhập.
        </p>
        <form class="form auth__form" @submit.prevent="login">
          <div class="form__group">
            <div class="form__text-input">
              <input type="email" name="" placeholder="Email" class="form__input" required id="email" v-model="email" />
              <img src="../assets/icons/message.svg" alt="" class="form__input-icon" />
              <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
            </div>
            <!-- <p class="form__error">Email is not in correct format</p> -->
          </div>
          <div class="form__group">
            <div class="form__text-input">
              <input type="password" name="" placeholder="Password" class="form__input" required id="password"
                v-model="password" />
              <img src="../assets/icons/lock.svg" alt="" class="form__input-icon" />
              <img src="../assets/icons/form-error.svg" alt="" class="form__input-icon-error" />
            </div>
            <!-- <p class="form__error">Password must be at least 6 characters</p> -->
          </div>
          <div class="form__group form__group--inline">
            <label class="form__checkbox">
              <input type="checkbox" name="" id="" class="form__checkbox-input d-none" />
              <span class="form__checkbox-label">Đặt làm mặc định</span>
            </label>
            <a href="../reset-password.html" class="auth__link form__pull-right">Quên mật khẩu?</a>
          </div>
          <div class="form__group auth__btn-group">
            <button class="btn btn--primary auth__btn form__submit-btn">Đăng nhập</button>
            <button class="btn btn--outline auth__btn btn--no-margin">
              <img src="../assets/icons/google.svg" alt="" class="btn__icon icon" />
              Đăng nhập với Google
            </button>
          </div>
        </form>

        <p class="auth__text">
          Vẫn chưa có tài khoản?
          <router-link to="/signup" class="auth__link auth__text-link" id="signup-link">
          Đăng ký
        </router-link>
        </p>

        

      </div>
    </div>
  </main>
  <!-- <script>
    window.dispatchEvent(new Event("template-loaded"));
  </script> -->
</template>

<script>
import axios from "axios";
// import "../src/assets/js/scripts.js";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Send login request to server
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$emit("updateUser", response.data);
          this.$router.push("/products");
          // Redirect to home page or dashboard
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* .login-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
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
#signup-link {
  text-decoration: none;
  color: rgb(72, 152, 255);
  text-align: center;
} */
</style>
