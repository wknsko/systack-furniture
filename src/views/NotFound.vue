<template>


    <div class="cover">
        <img src="../assets/cover.jpg" />
    </div>


    <div data-aos="zoom-in-right" data-aos-delay="400" data-aos-offset="300" data-aos-duration="1500"
        data-aos-once="true" class="info-one">
        <div class="image">
            <img src="../assets/info-one.jpg" />
        </div>
        <div class="text-body">
            <h3>Find amazing deals for every room in your home</h3>
            <div class="text">Let yourself be inspired by our unique furniture, accessories and lighting - our stores in
                Toronto and Vancouver offer great lifestyle products and sparking interior design ideas.From classic
                pieces to
                modern designs, our collection is carefully chosen for style, quality and value. As a locally-owned
                family business for over 13 years, we look forward to helping your family make your house into a home
            </div>
        </div>

    </div>

    <div data-aos="zoom-in-left" data-aos-delay="200" data-aos-offset="400" data-aos-duration="1500"
        data-aos-once="true" class="info-two">
        <div class="text-body">
            <h3>Why us?</h3>
            <div class="text">We specialize in locally designed, custom made and in-stock furniture & fixtures for
                residential, retail and corporate applications. We design and build modern pieces that are functional
                and
                timeless. We've been around since 2000, and every day we continue to grow.We're a real furniture store,
                and we
                don't need to guess what you'll be interested in. We curate our collection to make finding the right fit
                easy,
                and we only sell what we know will last.</div>
        </div>
        <div class="image">
            <img src="../assets/info-two.jpg" />
        </div>
    </div>

    <div class="quote">
        <div class="line"></div>
        <div class="text">
            Paying homage to the independent modernist spirit of the mid-20th century, our capacious collection of
            mid-century
            modern furniture is bold yet simplistic with deft aesthetics and high function
        </div>
        <div class="line"></div>
    </div>

    <div class="grid">
        <div v-if="loading" class="loader">loading</div>
        <div v-else class="grid-body">
            <div v-for="img in 6" :key="img" v-cloak>
                <img data-aos="flip-down" data-aos-delay="600" data-aos-duration="3000" :src="getImg(img)" />
            </div>

        </div>
    </div>


</template>

<script>
import AOS from 'aos'



export default {
    name: 'App',
    data() {
        return {
            loading: false,

        }
    },
    methods: {
        getImg(pic) {
            return require('../assets/00' + pic + '.jpg')
        },



    },
    created() {
        AOS.init();

    },
    async mounted() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 7000)
    },
    components: {

    }
}
</script>

<style>
</style>