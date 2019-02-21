<template>
    <v-layout row>
        <v-flex xs12>
            <v-container fluid grid-list-lg class="pa-0">
                <v-layout row wrap>
                    <v-flex xs6 sm6 md6 lg3 v-for="(card, i) of cards" :key="i">
                        <v-card>
                            <v-img
                                    class="white--text card-img"
                                    height="200px"
                                    :class="{'bug': card.type == 'Bug', 'task': card.type == 'Task'}"
                                    alt="IMG"
                            >
                                <v-container
                                        v-if="card.assignedTo"
                                        fill-height
                                        fluid
                                        pa-2
                                >
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-icon large color="green darken-2">face</v-icon>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span class="grey--text">Type: {{card.type}}</span><br>
                                    <span class="red--text">Title: {{card.title}}</span><br>
                                    <span>{{card.description}}</span><br>
                                    <span>Estimation: {{card.estimationTime}}</span>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn depressed color="gray" :to="`/card/${card.id}`">Open</v-btn>
                                <v-btn depressed color="gray" @click="assignToMe(card)">Take</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        computed: {
            cards() {
                return this.$store.getters.getAllCards;
            }
        }
    }
</script>

<style scoped>
    .card-img {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .card-img.bug {
        background-image: url("./../assets/bug.png");
    }
    .card-img.task {
        background-image: url("./../assets/task.png");
    }
</style>