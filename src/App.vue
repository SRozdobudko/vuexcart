<template>
    <div>
        <v-app>
            <Header></Header>
            <v-content>
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        components: {
            Header
        },
        data() {
            return {}
        }
    }
</script>
