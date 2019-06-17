<template>
    <div class="app-wrapper">
        <Header />
        <GenerateButton />
        <Joke />
    </div>
</template>

<script>
import Header from "./Header"
import GenerateButton from "./GenerateButton"
import Joke from "./Joke"

export default {
    components: {
        Header,
        GenerateButton,
        Joke
    }
}
</script>

<style lang="scss" scoped>
    .app-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
