<template>
    <div >
        <div class="text-h4">
            home
        </div>
        <div>
            {{ $route.name }} <br>
            {{ $route.meta }}
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>

<route lang="yaml">
    name : home-page
    meta : 
        requiresAuth : true
</route>