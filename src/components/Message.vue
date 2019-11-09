<template>
    <div class="message">
    <p>Message Componets - {{test}}</p>
    </div>
</template>

<script>
export default {
props: {
    msg: {
        type: String,
        required: true,
    }
} 
}
</script>

<style lang="scss" scoped>
.message {
    text-align: center;
    padding: 20px;
}
</style>