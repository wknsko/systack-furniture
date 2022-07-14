<template>
<div class="line-footer"></div>
    <footer>
        <div class="email">infor@sysstack.com</div>
        <div class="adress">1151 Martin Grove Rd, Etobicoke,Canada</div>
        <div class="social-icons">
            <ul v-for="i in 3" :key="i">
                <li><img :src="getSocial(i - 1)" /></li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            icons: ['facebook.png', 'instagram.png', 'whatsapp.png']
        }
    },
    methods: {
        getSocial(idx) {
            return require('../assets/' + this.icons[idx]);
        }
    }


}
</script>

<style>

</style>