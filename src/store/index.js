import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notes: [
            {
            title: 'First Note',
            descr: 'Description for first note',
            date: new Date(Date.now()).toLocaleString()
        },
        {
            title: 'Second Note',
            descr: 'Description for second note',
            date: new Date(Date.now()).toLocaleString()
        },
        {
            title: 'Third Note',
            descr: 'Description for third note',
            date: new Date(Date.now()).toLocaleString()
        }
    ],
    priority: [
        {
            title: 'Normal' ,
            value: 'white'
        },
        {
            title: 'Important' ,
            value: 'yellow'
        },
        {
            title: 'Hard',
            value: 'red'
        }
        ]
    },
    mutations: {
        ADD_NOTE: (state, payload) => {
            state.notes.push(payload);
        },
        REMOVE_NOTE: (state, payload) => {
            state.notes.splice(payload,1);
        },
        FILTER_NOTE: (state, payload) => {            
            let array = state.notes;
            if (!payload) return array;
            payload = payload.trim().toLowerCase(); 
            array.filter((item) => {
                if (item.title.toLowerCase().indexOf(payload) !== -1){
                    return item;
                    }
                })
            state.notes = array;
        }
    },
    actions: {
        ADD_NOTE: ({commit}, payload)=> {
            commit('ADD_NOTE', payload);
        },
        REMOVE_NOTE: ({commit}, payload)=> {
            commit('REMOVE_NOTE', payload);
        },
        FILTER_NOTE: ({commit}, payload)=> {
            commit('FILTER_NOTE', payload);
        }
        },
    getters: {
        GET_NOTE: (state) => {
            return state.notes;
        },
        GET_PRIORITY: (state) => {
            return state.priority;
        }
    },

})