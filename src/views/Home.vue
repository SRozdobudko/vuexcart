<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs3 lg2>
                    <v-list
                            subheader
                            two-line
                    >
                        <v-subheader>Coffee List:</v-subheader>

                        <v-list-tile v-for="(coffee, i) of selectedCoffee" :key="i">
                            <v-list-tile-content @click="notifications = !notifications">
                                <v-list-tile-title>{{coffee.type}}</v-list-tile-title>
                                <v-list-tile-sub-title>Price: ${{coffee.price}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon @click="remove()">delete</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                    </v-list>
                </v-flex>
                <v-flex xs9 offset-xs1>
                    <v-container fluid grid-list-lg class="pa-0">
                        <v-layout row wrap>
                        <v-flex xs6 sm6 md4 lg3 v-for="item in 7">
                            <v-card>
                                <v-img
                                        class="white--text"
                                        height="200px"
                                        src=""
                                        alt="IMG"
                                >
                                </v-img>
                                <v-card-title>
                                    <div>
                                        <span class="grey--text">Type</span><br>
                                        <span>Coffee</span><br>
                                        <span>Price: $5.33</span>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="gray">Select</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        computed: {
            selectedCoffee() {
                return [
                    {type: 'Latte', price: '4.55'},
                    {type: 'Americano', price: '2.17'},
                    {type: 'Vodka', price: '11.83'},
                    {type: 'Tea', price: '6.10'},
                ]
            }
        },
        methods: {
            remove() {
                console.log('Remove call',);
            }
        }
    }
</script>

<style scoped>

</style>