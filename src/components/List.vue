<template>
  <div class="row">
    <h2 class="ms-2">{{ data.store.state.userName }}さんの買い物リスト</h2>
  </div>
  <div class="row my-3">
    <div class="col-10 offset-1 col-lg-8 offset-lg-2">
      <div class="card　my-2 text-center">
        <div class="btn-group card-header h4">
          <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <a>{{ data.store.state.List[data.shopindex].shopName }}</a>
          </button>
          <ul class="dropdown-menu">
            <li v-for="(shop, index) in List" :key="select" @click="selectShop(index)"><a class="dropdown-item">{{ shop.shopName }}</a></li>
          </ul>
        </div>
        <ul class="list-group list-group-flush h5 text-start">
          <li v-for="(item, itemindex) in List[data.shopindex].itemList" class="list-group-item">
            <fa v-if="item.isSelected" @click="check(itemindex)" icon="square-check" class="me-2" />
            <fa v-else @click="check(itemindex)" icon="square" class="me-2" />
            <a>{{ item.itemName }}</a>
          </li>
          <li class="list-group-item">
            <div class="form-group d-flex">
              <input v-model="data.newItem" class="form-control" placeholder="新規メモ">
              <button @click="addItem" class="btn btn-info ms-1">追加</button>
            </div>
            <div v-if="data.failFlash" class="alert alert-danger mx-5 my-2 text-center" role="alert">正常に登録されませんでした</div>
          </li>
        </ul>
      </div>
      <div class="my-4 text-center">
        <div @click="purchase" class="btn btn-primary">購入完了</div>
      </div>
      <div class="text-center">
        <div @click="allCheck" class="btn btn-success">全てをチェックする or 全てのチェックを外す</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    shopname: String
  },
  setup(props) {
    const data = reactive({
      shopindex: 0,
      newItem: "",
      failFlash: false,
      store: useStore(),
    })

    const List = computed(() => {
      return data.store.state.List
    })

    const selectShop = (index) => {
      data.shopindex = index
    }

    const check = (itemindex) => {
      data.store.commit({type: 'selected', shopindex: data.shopindex, itemindex: itemindex})
    }
    
    const addItem = () => {
      if (data.newItem) {
        data.failFlash = false
        data.store.commit({type: 'addItem', shopindex: data.shopindex, newItem: data.newItem})
        data.newItem = ""
      }
      else {
        data.failFlash = true
      }
    }

    const purchase = () => {
      data.store.commit('purchase', data.shopindex)
    }

    const allCheck = () => {
      data.store.commit('allCheck', data.shopindex)
    }

    return {
      data, List, selectShop, check, addItem, allCheck, purchase
    }
  },
}
</script>


