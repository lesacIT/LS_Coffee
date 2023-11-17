<template>
  <div class="nav" v-if="loggedIn !== null">
    <div class="nav-bar">
      <div class="nav-left">
        <router-link to="/products" id="products-link">
          <!-- <h1>LS Coffee</h1> -->
          <img src="../assets/icons/ls-coffee-high-resolution-logo-transparent.png" alt="" style="width:120px ;">
        </router-link>
      </div>

      <div class="nav-center">
        <router-link to="/products">Trang chủ</router-link>
        <router-link to="/order">Hóa đơn</router-link>
        <router-link to="/cart" id="cart-link">Giỏ hàng</router-link>
        <!-- <router-link to="/cart" id="cart-link">Liên hệ</router-link> -->
        <form class="search" @submit.prevent="search" style="margin-top: -6px;">
          <input type="text" v-model="searchTerm" placeholder="Tìm kiếm sản phẩm"  style="padding-left: 20px;"/>

          <!-- <button class="btn-search" @click="search">
            <fa class="icon" icon="fa-search" />
          </button> -->
          <button @click="search" style="margin-left: 10px;">
            <img src="../assets/icons/search.svg" alt="" class="icon top-act__icon" />
          </button>

          <!-- <div class="search-container">
            <input type="text" name="search" placeholder="Search..." class="search-input">
            <a href="#" class="search-btn">
              <i class="fas fa-search"></i>
            </a>
          </div> -->
        </form>
        <!-- <router-link v-if="loggedIn && user.result.isAdmin" to="">Quản lý</router-link> -->
        <a v-if="loggedIn">{{ user.result.name }}</a>
        <a v-if="loggedIn" @click="logout">
          <fa icon="fa-solid fa-right-from-bracket" size="xl" />
        </a>
        <router-link v-if="!loggedIn" to="/login">Đăng nhập</router-link>
      </div>
    </div>

  </div>
</template>

<script>

// import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
// import "https://fonts.googleapis.com/css2?family=Lato&display=swap"
/*

href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
*/
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    updateUser: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: "",
      products: [],
    };
  },
  computed: {
    loggedIn() {
      return !!this.user;
    },
  },
  methods: {
    logout() {
      this.$router.push("/login");
      this.updateUser(null);
      localStorage.removeItem("user");
    },
    async search() {
      if (this.searchTerm.trim() === "") {
        return;
      }

      try {
        const searchTerm = this.searchTerm;
        this.$router.push({ name: "SearchPage", params: { searchTerm } });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
}

#login-link button {
  margin-left: 16px;
}

.nav {
  background-color: #EEEEEE;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  max-width: 1200px;
  margin: auto;
}

.nav-left {
  margin-left: 16px;
}

.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
  width: 80%;
}

.nav-center a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}

.btn-search {
  width: 34px;
  height: 34px;
  border-radius: 0 10px 10px 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn-search .icon {
  color: gray;
  font-size: 20px;
}

.search {
  display: flex;
  flex-direction: row;
  margin: 15px 0 0 0;
}

.search input {
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
}
</style>
