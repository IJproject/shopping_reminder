<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-5">
    <div class="container">
      <div>
        <router-link :to="{ name: 'main'}" class="navbar-brand">Shopping<br>リマインダー</router-link>
      </div>
      <div id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 me-5">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">メニュー</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link :to="{ name: 'changeusername'}" class="dropdown-item">ユーザー情報</router-link></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><router-link :to="{ name: 'registerShop'}" class="dropdown-item">ショップ新規登録</router-link></li>
              <li><router-link :to="{ name: 'deleteShop'}" class="dropdown-item">ショップ削除</router-link></li>
              <li><router-link :to="{ name: 'main'}" class="dropdown-item">ホームへ戻る</router-link></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><router-link :to="{ name: 'guide'}" class="dropdown-item">使い方ガイド</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup(props) {

  }
}
</script>
