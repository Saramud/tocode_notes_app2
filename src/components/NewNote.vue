<template>
    <div class="new-note">
        <label>Title {{message}}</label>
        <input type='text' v-model='note.title'>
        <div class="prioritets" >
            <label  v-for='(item, index) in priority' :class="{ checked: (item.value === checkColor) ? check = true: check = false }" :key='index' >
                {{item.title}} 
                <input type='radio' :class='{ prt:inputHidden }' v-model='checkColor' :value='item.value' >
            </label>
        </div>
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
data() {
    return {
            title: 'Notes App',
            note: {
                title: '',
                descr: '',
            },
            message: '',
            inputHidden: true, 
            check: false,
            checkColor: '',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    
    }
},
computed: {
    classObject: function () {
        return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
        }
    }
},
methods: {
    addNote() {
                let {title, descr} = this.note;
                if (title === '') {
                    this.message = "title can't be blank";
                    return false;
                }
                this.$store.dispatch('ADD_NOTE', {
                    title,
                    descr,
                    date: new Date(Date.now()).toLocaleString(),
                    color: this.checkColor,
                });
                this.note.title ='';
                this.note.descr = '';
                this.message = null;
                this.checkColor = 'white'
            },
    
},
created() {
        this.priority = this.$store.getters.GET_PRIORITY;
    },
}
</script>

<style lang="scss" >
.new-note{
    display: flex;
    flex-direction: column;
    justify-content: center;
} 
.btn {
    width: 180px;
    margin: 20px;
    align-self: center;
}
.prioritets {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    top: 230px;
    :hover:last-child{
        background-color: red;
    }
    :hover:nth-child(2) {
        background-color: yellow;
    }
    
    & label {
    cursor: pointer;
    padding: 0 5px;
    margin-right: 5px;
    border-radius: 5px;
    font-size: 12px;
    min-width: 120px;
    transition: background-color 2s, box-shadow .5s;
    &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    
}
}
.prt {
    display: none;
}
.checked{
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    }

input[type='radio']:checked + #x {
box-shadow:0 0 10px rgba(0,0,0,0.5);
}
</style>