export default {
    state: {
        cards: [
            {
                id: '1',
                type: 'Task',
                estimationTime: '2',
                title: 'Create navBar',
                description: 'Blah blah blah - blah blah blah',
                assignedTo: ''
            },
            {
                id: '2',
                type: 'Bug',
                estimationTime: '3',
                title: 'Fix navBar btn',
                description: 'Blah blah blah - blah blah blah',
                assignedTo: 'me'
            },
            {
                id: '3',
                type: 'Task',
                estimationTime: '4',
                title: 'Create footer',
                description: 'Blah blah blah - blah blah blah',
                assignedTo: ''
            },
            {
                id: '4',
                type: 'Task',
                estimationTime: '5',
                title: 'Create router',
                description: 'Blah blah blah - blah blah blah',
                assignedTo: ''
            },
            {
                id: '5',
                type: 'Bug',
                estimationTime: '7',
                title: 'Fix router',
                description: 'Blah blah blah - blah blah blah',
                assignedTo: ''
            },
        ]
    },
    getters: {
        getAllCards(state) {
            return state.cards;
        },
        getUnassignedCards(state) {
            return state.cards.filter(card => !card.assignedTo);
        },
        getMyCards(state) {
            return (assignedTo) => state.cards.filter(card => card.assignedTo == assignedTo);
        },
        getCardById(state) {
            return (id) => state.cards.find(card => card.id == id);
        }
    },
    mutations: {
        assignToMe(state, payload) {
            let task = state.cards.find(card => card.id == payload);
            task.assignedTo = 'me';
        },
        removeFromMe(state, payload) {
            let task = state.cards.find(card => card.id == payload);
            task.assignedTo = '';
        }
    },
    actions: {
        assignToMe({commit}, payload) {
            commit('assignToMe', payload);
        },
        removeFromMyList({commit}, payload) {
            commit('removeFromMe', payload);
        }
    }
}