<template>
  <div class="row my-3">
    <div class="col-10 offset-1 col-lg-8 offset-lg-2 border border-secondary border-2">
      <div class="my-2 text-center">
        <div class="h4 my-5">ユーザー名変更</div>
        <form class="px-4 mb-4">
          <div class="mb-3">
            <label for="changeusername" class="form-label">新ユーザー名</label>
            <input v-model="data.newUser" class="form-control" id="changeusername">
          </div>
          <div @click="newUserName" class="btn btn-primary">変更</div>
        </form>
        <div v-if="data.successFlash" class="alert alert-info mx-5 my-3" role="alert">ユーザー名の変更が完了しました！</div>
        <div v-if="data.failFlash" class="alert alert-danger mx-5 my-3" role="alert">ユーザー名の変更ができませんでした。</div> 
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
      newUser: "",
      successFlash: false,
      failFlash: false,
      store: useStore(), 
    })

    const newUserName = () => {
      if (data.newUser) {
        data.failFlash = false
        data.store.commit('newUserName', data.newUser)
        data.successFlash = true
      }
      else {
        data.successFlash = false
        data.failFlash = true
      }
    }

    return {
      data, newUserName
    }
  }
}
</script>