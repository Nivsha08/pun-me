<template>
    <div class="button-wrapper">
        <el-button
            @click="getJoke"
            class="generate-button" 
            type="success">
            Make me laugh!</el-button>
    </div>
</template>

<script>
import PunGenerator from "../generator/PunGenerator.ts"
const generator = new PunGenerator();

export default {
    methods: {
        async setLoading(payload) {
            await this.$store.dispatch('setLoading', payload);
        },
        async setJoke(payload) {
            await this.$store.dispatch('setJoke', payload);
        },
        async getJoke() {
            await this.setLoading(true);
            await setTimeout(async () => {
                this.setJoke(await generator.getJoke());
                await this.setLoading(false);
            }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .button-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .generate-button {
            font-weight: bold;
            padding: .8rem 3rem;
            text-transform: uppercase;
        }
    }
</style>
