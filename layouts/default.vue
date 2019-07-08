<template>
    <div>
        <the-navbar></the-navbar>
        <nuxt/>
        <the-footer></the-footer>
    </div>
</template>

<style>

</style>
<script>
    import TheNavbar from "../components/Thenavbar";
    import TheFooter from "../components/TheFooter";
    export default {
        components: {
            TheFooter,
            TheNavbar
        }
    }
</script>
s
