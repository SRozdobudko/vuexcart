<template>
    <v-layout row>
        <v-flex xs12>
            <h1>Card page</h1>
            <p>{{card.id}} - {{card.title}} - {{card.description}}</p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            card() {
                return this.$store.getters.getCardById(this.id);
            }
        }
    }
</script>

<style scoped>

</style>