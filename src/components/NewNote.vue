<template>
    <div class="new-note">
        <label>Title</label>
        
        <input type="text" v-model="note.title">
        <div class="prioritets">
            <input id='one' class='prt' type='radio' name='prioritet' value='white' v-model='checked'>
            <label for='one'>Standart note</label>
            <input id ='two' class='prt' type='radio' name='prioritet' value='yellow' v-model='checked'>
            <label for='two'>Imporant note</label>
            <input id='three' class='prt' type='radio' name='prioritet' value='red' v-model='checked'>
            <label for='three'>MustHave note</label>
        </div>
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
props: {
    note: {
        type: Object,
        required: true,
    },
    standart: {
        type: String,
        required: true,
    }
},
data () {
return { checked: this.standart }
},
methods: {
addNote() {
    this.$emit('addnote', this.note);
}
},
watch: { 
    checked(value) {
    this.$emit('priority', value);
        }
    }
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
    :hover:nth-child(4) {
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
:hover[value='important'] {
        background-color: red;
    }

.prt {
    display: none;
}
input[type='radio']:checked + label {
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    }
</style>