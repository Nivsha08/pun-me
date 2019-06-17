<template>
    <div class="joke-area-wrapper">
        <h2 class="placeholder" v-if="isLoading">
            <i class="el-icon-loading icon"></i>
            fetching a joke out of the humor box...
        </h2>
        <h2 class="placeholder" v-else-if="joke === ''">
            CLICK ABOVE TO GET YOUR FIRST JOKE !
        </h2>
        <div v-else>
            <h2 v-for="(sentence, i) in joke" :key="i">
                {{sentence}}
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLoading: {
            get() {
                return this.$store.getters.getLoading;
            },
            set(payload) {
                this.$store.dispatch('SET_LOADING', payload);
            }
        },
        joke: {
            get() {
                return this.$store.getters.getJoke;
            },
            set(payload) {
                this.$store.dispatch('SET_JOKE', payload);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .joke-area-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8f8f8;
        border-radius: 5px;
        margin: 3rem;
        width: 100%;
        height: 350px;

        h2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            .icon {
                margin-right: 1rem;
                font-size: 2.5rem;
            }
        }

        .placeholder {
            opacity: .15;
        }
    }
</style>
