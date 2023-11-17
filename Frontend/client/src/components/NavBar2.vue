<template>
  <!-- Slideshow -->
  <div class="home__container" style="margin: 15px;">
    <div class="slideshow">
      <div class="slideshow__inner">
        <div class="slideshow__item">
          <a href="#!" class="slideshow__link">
            <picture>
              <source media="(max-width: 767.98px)" srcset="../assets/img/slideshow/item-1-md.png" />
              <img src="../assets/img/slideshow/item-1.png" alt="" class="slideshow__img" />
            </picture>
          </a>
        </div>
      </div>

      <div class="slideshow__page">
        <span class="slideshow__num">1</span>
        <span class="slideshow__slider"></span>
        <span class="slideshow__num">5</span>
      </div>
    </div>
  </div>
   <!-- Browse Categories -->
   <div style="margin: 15px;">
    <section class="home__container">
                <div class="home__row">
                    <h2 class="home__heading">Danh Mục</h2>
                </div>
                <div class="home__cate row row-cols-3 row-cols-md-1">
                    <!-- Category item 1 -->
                    <div class="col">
                        <a href="#!">
                            <article class="cate-item">
                                <img src="../assets/img/category-item/item-1.png" alt="" class="cate-item__thumb" />
                                <div class="cate-item__info">
                                    <h3 class="cate-item__title">Cà phê đóng gói</h3>
                                    <p class="cate-item__desc">10.000đ - 40.000đ</p>
                                </div>
                            </article>
                        </a>
                    </div>

                    <!-- Category item 2 -->
                    <div class="col">
                        <a href="#!">
                            <article class="cate-item">
                                <img src="../assets/img/category-item/item-2.png" alt="" class="cate-item__thumb" />
                                <div class="cate-item__info">
                                    <h3 class="cate-item__title">Cà Phê Túi</h3>
                                    <p class="cate-item__desc">100.000đ - 400.000đ</p>
                                </div>
                            </article>
                        </a>
                    </div>

                    <!-- Category item 3 -->
                    <div class="col">
                        <a href="#!">
                            <article class="cate-item">
                                <img src="../assets/img/category-item/item-3.png" alt="" class="cate-item__thumb" />
                                <div class="cate-item__info">
                                    <h3 class="cate-item__title">Cà Phê Cao Cấp</h3>
                                    <p class="cate-item__desc">1.000.000đ - 15.000.000đ</p>
                                </div>
                            </article>
                        </a>
                    </div>
                </div>
            </section>
   </div>
</template>

<script>

export default {
  name: "NavBar2",
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
  background-color: #ffd400;
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

.slideshow {
  position: relative;

  &__inner {
    display: flex;
    overflow: hidden;
  }

  &__item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    padding-top: 34%;

    @include abstracts.screen(md) {
      padding-top: 50%;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  &__page {
    --color: #fff;

    position: absolute;
    bottom: 15%;
    left: 5.2%;
    width: 12.8%;
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  &__num {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 144.444%;
    color: var(--color);

    @include abstracts.screen(md) {
      font-size: 1.4rem;
      line-height: 142.857%;
    }
  }

  &__slider {
    position: relative;
    width: 100%;
    height: 4px;
    flex-shrink: 0;
    background: var(--color);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;

      width: 14px;
      height: 14px;
      border: 4px solid var(--color);
      border-radius: 50%;

      @include abstracts.screen(md) {
        border-width: 3px;
      }
    }

    &::before {
      left: 0;
      translate: -90% -50%;
    }

    &::after {
      right: 0;
      translate: 90% -50%;
    }
  }
}
</style>
