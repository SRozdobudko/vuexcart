<template>
    <div>
        <Panel></Panel>
        <v-container fluid>
            <!--<v-layout row>-->
                <!--<v-flex xs4 lg3>-->
                    <!--<v-list-->
                            <!--subheader-->
                            <!--two-line-->
                    <!--&gt;-->
                        <!--<v-subheader>My Task List:</v-subheader>-->

                        <!--<v-list-tile v-for="(myCard, i) of myCards" :key="i">-->
                            <!--<v-list-tile-content @click="notifications = !notifications">-->
                                <!--<v-list-tile-title>Type: {{myCard.type}}</v-list-tile-title>-->
                                <!--<v-list-tile-sub-title>Description: {{myCard.description}}</v-list-tile-sub-title>-->
                            <!--</v-list-tile-content>-->
                            <!--<v-list-tile-action>-->
                                <!--<v-icon @click="remove(myCard)">delete</v-icon>-->
                            <!--</v-list-tile-action>-->
                        <!--</v-list-tile>-->

                    <!--</v-list>-->
                <!--</v-flex>-->
                <!--<v-flex xs8 offset-xs1>-->
                    <!--<v-container fluid grid-list-lg class="pa-0">-->
                        <!--<v-layout row wrap>-->
                            <!--<v-flex xs6 sm6 md6 lg3 v-for="(card, i) of unassignedCards" :key="i">-->
                                <!--<v-card>-->
                                    <!--<v-img-->
                                            <!--class="white&#45;&#45;text card-img"-->
                                            <!--height="200px"-->
                                            <!--:class="{'bug': card.type == 'Bug', 'task': card.type == 'Task'}"-->
                                            <!--alt="IMG"-->
                                    <!--&gt;-->
                                    <!--</v-img>-->
                                    <!--<v-card-title>-->
                                        <!--<div>-->
                                            <!--<span class="grey&#45;&#45;text">Type: {{card.type}}</span><br>-->
                                            <!--<span class="red&#45;&#45;text">Title: {{card.title}}</span><br>-->
                                            <!--<span>{{card.description}}</span><br>-->
                                            <!--<span>Estimation: {{card.estimationTime}}</span>-->
                                        <!--</div>-->
                                    <!--</v-card-title>-->
                                    <!--<v-card-actions>-->
                                        <!--<v-btn depressed color="gray" :to="`/card/${card.id}`">Open</v-btn>-->
                                        <!--<v-btn depressed color="gray" @click="assignToMe(card)">Take</v-btn>-->
                                    <!--</v-card-actions>-->
                                <!--</v-card>-->
                            <!--</v-flex>-->
                        <!--</v-layout>-->
                    <!--</v-container>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
            <Cards></Cards>
        </v-container>
    </div>
</template>

<script>
    import Panel from './../components/Panel'
    import Cards from './../components/Cards'
    export default {
        components: {
            Panel,
            Cards
        },
        computed: {
            cardsList() {
                return this.$store.getters.getAllCards;
            },
            unassignedCards() {
                return this.$store.getters.getUnassignedCards;
            },
            myCards() {
                return this.$store.getters.getMyCards('me');
            }
        },
        methods: {
            remove(card) {
                this.$store.dispatch('removeFromMyList', card.id)
            },
            assignToMe(card) {
                this.$store.dispatch('assignToMe', card.id);
            }
        }
    }
</script>

<style scoped>
</style>