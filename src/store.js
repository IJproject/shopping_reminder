import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
  state() {
    return {
      userName: "ホストユーザー",
      List: [{
        shopName: "とにかくメモ",
        itemList: [{itemName: "とにかく1", isSelected: false}, {itemName: "とにかく2", isSelected: false}, {itemName: "とにかく3", isSelected: false}],
      },
      {
        shopName: "ショップ1",
        itemList: [{itemName: "ショップ1-1", isSelected: false}, {itemName: "ショップ1-2", isSelected: false}],
      }],
    }
  },
  mutations: {
    newUserName: (state, newUser) => {
      state.userName = newUser
    },

    registerShop: (state, newShopName) => {
      const pushObject = {shopName: newShopName, itemList:[]}
      state.List.push(pushObject)
    },

    deleteShop: (state, index) => {
      state.List.splice(index,index)
    },

    selected: (state,object) => {
      const shopindex = object.shopindex
      const itemindex = object.itemindex
      state.List[shopindex].itemList[itemindex].isSelected = !state.List[shopindex].itemList[itemindex].isSelected
    },

    addItem: (state, object) => {
      const shopindex = object.shopindex
      const newItem = object.newItem
      state.List[shopindex].itemList.push({itemName: newItem, isSelected: false})
    },

    purchase: (state, shopindex) => {
      const itemList = state.List[shopindex].itemList
      for (const [index, item] of itemList.entries()) {
        if(item.isSelected) {
          delete itemList[index];
        } 
      }
      state.List[shopindex].itemList = itemList.filter(function( item ) {
        return item !== undefined
      })
    },

    allCheck: (state, shopindex) => {
      let sum = 0
      const itemList = state.List[shopindex].itemList
      for (const item of itemList){
        item.isSelected ? sum += 1 : sum += 0
      }
      if (sum === itemList.length) {
        for (const checked of itemList) {
          checked.isSelected = false
        }
      }
      else {
        for (const unchecked of itemList) {
          unchecked.isSelected = true
        }
      }
    },


  },
  plugins: [
    createPersistedState(),
  ]
})