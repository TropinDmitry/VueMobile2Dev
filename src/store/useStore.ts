import { createStore } from "vuex";
import redux from '../components/icons/redux.png'
import cat from '../components/icons/cat.jpg'
import chatbot from '../components/icons/chatbot.png'

export interface Card {
  id: number,
  name: string,
  shortName: string,
  image: string,
  description: string
}

const DEFAULT_CARDS = [
  { id: 1, image: redux, name: "Test", shortName: 'test', description: "sfsdfgsdgsdfg" },
  { id: 2, image: cat, name: "Qwerty", shortName: 'qwe', description: "sfsdfgsdgsdfg" },
  { id: 3, image: chatbot, name: "Google", shortName: 'google', description: "sfsdfgsdgsdfg" },
];

export const store = createStore({
  state: {
    cards: [] as Card[],
    currentCard: null as Card
  },

  mutations: {
    initData(state) {
        if (!state.cards.length) {
            state.cards = [...DEFAULT_CARDS];
        }
    },

    removeApp(state, cardId) {
      console.log(cardId);
      state.cards = state.cards.filter(c => c.id !== cardId);
    },

    newAppCard(state, data) {
      data.id = state.cards[state.cards.length-1].id + 1;
      state.cards.push(data);
    },

     setCurrentCard(state, cardId) {
      state.currentCard = state.cards.find((card) => card.id === cardId);
      console.log(state.currentCard);
     }
  },

  actions: {
    deleteApp(ctx, cardId) {
      ctx.commit('removeApp', cardId);
    },

    createAppCard(ctx, data) {
      ctx.commit('newAppCard', data);
    }
  },

  // getters: {
  //   currentCard(state) {
  //     state.currentCardId = 
  //   }
  // }
});
