<template>
  <div class="container my-5">
    <div class="d-flex">
      <fa icon="hand-point-up" class="me-3"/><p>画面右上<fa icon="arrow-up-right-from-square" class="mx-1"/>の「メニュータブ」から各種機能を選んで使うことができます。</p>
    </div>
    <div class="d-flex">
      <fa icon="hand-point-up" class="me-3"/><p>ユーザー名の変更をしたい場合は<router-link :to="{ name: 'changeusername'}" class="text-secondary">こちら</router-link>から。</p>
    </div>
    <div class="d-flex">
      <fa icon="hand-point-up" class="me-3"/><p>ショップの新規登録をする際は<router-link :to="{ name: 'registerShop'}" class="text-secondary">こちら</router-link>から。削除をする際は<router-link :to="{ name: 'deleteShop'}" class="text-secondary">こちら</router-link>から</p>
    </div>
    <div class="d-flex">
      <fa icon="hand-point-up" class="me-3"/><p>各種記入欄やボタンについてよく分からない際は<router-link :to="{ name: 'guide'}" class="text-secondary">こちら</router-link>から。</p>
    </div>
    <div class="d-flex">
      <fa icon="hand-point-up" class="me-3"/><p>何かご意見やご要望などがございましたら、管理人の<a href="https://twitter.com/Junpe_portfolio" target="_blank" class="text-secondary">Twitter</a>までお願いします。</p>
    </div>
  </div>
  <div class="bg-dark text-white text-center">
    <p><br>~~ Have a Nice Shopping Life! ~~<br><br></p>
  </div>
</template>

<script>
export default {
  setup(props) {

  }
}
</script>