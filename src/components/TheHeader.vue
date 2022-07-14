<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <span class="logo-part logo-part-one">SYS</span>
                <span class="logo-part logo-part-two">TACK</span>
            </router-link>
        </div>
        <div @click="isMenuClicked = !isMenuClicked" class="burger">
            <div class="line" v-for="i in 3" :key="i"></div>

        </div>

        <Transition name="menu">
            <div  v-if="isMenuClicked" class="menu">
                <ul>
                    <li>
                        <router-link to="/about">About us</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </Transition>

    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuClicked: false,
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>