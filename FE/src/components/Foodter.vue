<template>
  <footer >
    <div class="container ">
      <div class="footer__row">
        <!-- Footer column 1 -->
        <div class="footer__col">
          <!-- Logo -->
          <a href="./" class="logo footer__logo">
            <!-- <img src="./assets/icons/logo.svg" alt="grocerymart" class="logo__img" /> -->
            <h1 class="logo__title">LS - COFFEE</h1>
          </a>
          <p class="footer__desc">
            Cà phê – điểm tựa của những giấc mơ.
          </p>

          <p class="footer__help-text">Nhận tin tức và cập nhật về sản phẩm..</p>
          <form action="" class="footer__form">
            <input type="text" class="footer__input" placeholder="Địa chỉ Email" />
            <button class="btn btn--primary">Gửi</button>
          </form>
        </div>

        <!-- Footer column 2 -->
        <div class="footer__col">
          <h3 class="footer__heading">Danh Mục</h3>
          <ul class="footer__list">
            <li>
              <a href="#!" class="footer__link">Tất cả sản phẩm</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Cà phê 1</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Cà phê 1</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Khuyến mãi </a>
            </li>
            <li>
              <a href="#!" class="footer__link">Sản phẩm mới</a>
            </li>
          </ul>
        </div>

        <!-- Footer column 3 -->
        <div class="footer__col">
          <h3 class="footer__heading">Hỗ trợ</h3>
          <ul class="footer__list">
            <li>
              <a href="#!" class="footer__link">Địa Chỉ Cửa hàng</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Tình trạng Đặt Hàng</a>
            </li>
          </ul>
        </div>

        <!-- Footer column 4 -->
        <div class="footer__col">
          <h3 class="footer__heading">Cửa Hàng</h3>
          <ul class="footer__list">
            <li>
              <a href="#!" class="footer__link">Dịch Vụ Khách Hàng</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Cá nhân</a>
            </li>
            <li>
              <a href="#!" class="footer__link">Chi Nhánh</a>
            </li>
          </ul>
        </div>

        <!-- Footer column 5 -->
        <div class="footer__col">
          <h3 class="footer__heading">Contact</h3>
          <ul class="footer__list">
            <li>
              <p class="footer__label">Email</p>
              <a href="mailto:contact@grocerymart.com" class="footer__link"> lesac002@gmail.com </a>
            </li>
            <li>
              <p class="footer__label">SDT</p>
              <a href="tel:18008888" class="footer__link">012345678</a>
            </li>
            <li>
              <p class="footer__label">Địa Chỉ</p>
              <p class="footer__text">
                Tân Long, Phụng Hiệp,Hậu Giang
              </p>
            </li>
           
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">2023 © LS COFFEE - Giấy phép ĐKKD số 0106683363</p>

        <div class="footer__socials">
          <a href="#!" class="footer__social-link footer__social-link--facebook">
            <img src="../assets/icons/facebook.svg" alt="" class="footer__social-icon" />
          </a>
          <a href="#!" class="footer__social-link footer__social-link--youtube">
            <img src="../assets/icons/youtube.svg" alt="" class="footer__social-icon" />
          </a>
          <a href="#!" class="footer__social-link footer__social-link--tiktok">
            <img src="../assets/icons/tiktok.svg" alt="" class="footer__social-icon" />
          </a>
          <a href="#!" class="footer__social-link footer__social-link--twitter">
            <img src="../assets/icons/twitter.svg" alt="" class="footer__social-icon" />
          </a>
          <a href="#!" class="footer__social-link footer__social-link--linkedin">
            <img src="../assets/icons/linkedin.svg" alt="" class="footer__social-icon" />
          </a>
        </div>
      </div>
    </div>


  </footer>
</template>
<script>
export default {
  name: "FoodterPage",
};
</script>
<style>
footer {
  background-color: #dddddd;
  color: #000000;
  padding: 1rem;
  align-items: center;
  width: 100%;
  text-align: center;
}
</style>
