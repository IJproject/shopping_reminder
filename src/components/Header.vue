<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-5">
    <div class="container">
      <div>
        <a class="navbar-brand" href="/">Shopping<br>リマインダー</a>
      </div>
      <div id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 me-5">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">メニュー</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/changeusername">ユーザー情報</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/registershop">ショップ新規登録</a></li>
              <li><a class="dropdown-item" href="/deleteshop">ショップ削除</a></li>
              <li><a class="dropdown-item" href="/">ホームに戻る</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/guide">使い方ガイド</a></li>
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
