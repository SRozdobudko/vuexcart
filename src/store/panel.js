export default {
    state: {
        expanded: true,
        wasChecked: false
    },
    getters: {
        expanded(state) {
            return state.expanded;
        },
        wasChecked(state) {
            return state.wasChecked;
        }
    },
    mutations: {
        changePanelVisibility(state, payload) {
            state.expanded = payload;
        },
        wasChecked(state) {
            state.wasChecked = true;
        }
    },
    actions: {
        changePanelVisibility({commit}, payload) {
            commit('changePanelVisibility', payload);
        },
        makeChecked({commit}) {
            commit('wasChecked');
        }
    }
}