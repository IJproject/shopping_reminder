<template>
  <div class="row my-3">
    <div class="col-10 offset-1 col-lg-8 offset-lg-2 border border-secondary border-2">
      <div class="my-2 text-center">
        <div class="h4 my-5">ショップ新規登録</div>
        <form class="px-4 mb-4">
          <div class="mb-3">
            <label for="registershop" class="form-label">新規ショップ名</label>
            <input v-model="data.newShop" class="form-control" id="registershop">
          </div>
          <div @click="registerShop" class="btn btn-primary">登録</div>
        </form>
        <div v-if="data.successFlash" class="alert alert-info mx-5 my-3" role="alert">ショップの新規登録が完了しました！</div>
        <div v-if="data.failFlash" class="alert alert-danger mx-5 my-3" role="alert">ショップの新規登録ができませんでした。</div> 
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(props) {
    const data = reactive({
      newShop: "",
      successFlash: false,
      failFlash: false,
      store: useStore(), 
    })

    const registerShop = () => {
      if (data.newShop) {
        data.failFlash = false
        data.successFlash = true
        data.store.commit('registerShop', data.newShop)
      }
      else {
        data.successFlash = false
        data.failFlash = true
      }
      data.newShop = ""
    }

    return {
      data, registerShop
    }
  }
}
</script>