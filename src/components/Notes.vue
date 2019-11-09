<template>
    <div class="notes">
        <div class="note" :class="{ full : !grid }"  :style = "{ backgroundColor: (note.color) ? col = note.color : col = 'white' }" v-for="(note, index) in notes" :key="index">
            <div class="note-header">  <!--color: (note.class) ? col = true: col = false -->
                <p> {{ note.title }} </p>
                <p style= "cursor: pointer" @click='rem(index)'>x</p>
            </div>
            <div class="note-body">
                <p> {{ note.descr }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        },
    },
    data () {
        return {
        col: '',
        }
    },
    methods: {
        rem(index) {
            this.$emit('remove', index);
        }
    },
}
</script>

<style lang="scss">
    .notes {
        display: flex;
        justify-content: space-between; 
        align-items: center;
        flex-wrap: wrap;
        padding: 40px 0; 
        .note{
        width: 48%;
        padding: 10px 20px;
        margin-bottom: 20px;
        background-color: #fff;
        transition: all .25s cubic-bezier(.02, .01, .47, 1);
        box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
        &:hover {
            box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }
        &.full {
            width: 100%;
        }
        }
        .note-body {
        margin: 20px 0; 
        }
    }
    
    span {
        font-size: 14px;
        color: #999;
    }
    .note-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 22px;
            color: #402caf;
        }
        svg {
            cursor: pointer;
            margin-right: 12px;
            color: #999;
            &:last-child{
                margin-right: 0px;
            }
            &.active {
                color: #402caf;
            }
        }
        &.full {
            p {
                margin-right: 16px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    

</style>