<template>
    <v-layout row>
        <v-flex xs12>
            <v-expansion-panel
                    v-model="expanded"
                    expand
            >
                <v-expansion-panel-content>
                    <v-card class="pa-5" color="blue-grey darken-2">
                        <v-card-text>Hi, dear User, You were assigned <span class="panel-link">3 tasks</span></v-card-text>
                        <span class="panel-hide-btn" @click="hide">Hide</span>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        computed: {
            expanded() {
                return [this.$store.getters.expanded];
            }
        },
        methods: {
            hide() {
                this.$store.dispatch('changePanelVisibility', false)
            }
        }
    }
</script>

<style scoped>
.panel-link {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
}
.panel-hide-btn {
    text-decoration: underline;
    cursor: pointer;
}
</style>