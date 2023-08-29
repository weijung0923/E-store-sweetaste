<template>
    <NavBar/>
    <main class="mt-14 mt-lg-18">
        <router-view></router-view>
    </main>
    <EmailSection/>
    <Footer/>
</template>
<script setup>
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import EmailSection from '../../components/EmailSection.vue';
</script>
<style lang="">
    
</style>