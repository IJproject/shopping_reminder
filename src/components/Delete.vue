<template>
  <div class="row my-3">
    <div class="col-10 offset-1 col-lg-8 offset-lg-2 border border-secondary border-2">
      <div class="my-2 text-center">
        <div class="h4 my-5">ショップ削除</div>
        <table class="table px-5">
          <tbody>
            <tr v-for="(shop, index) in List" :key="delete" class="my-1">
              <td>{{ shop.shopName }}</td>
              <td><div @click="deleteShop(index)" class="btn btn-danger btn-sm">削除</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(props) {
    const data = reactive({
      store: useStore(),
    })

    const List = computed(() => {
      return data.store.state.List
    })

    const deleteShop = (index) => {
      data.store.commit('deleteShop', index)
    }

    return {
      data, List, deleteShop
    }
  }
}
</script>