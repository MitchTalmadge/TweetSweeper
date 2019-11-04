<template>
    <div class="welcome h-100">
        <div class="container h-100 d-flex">
            <div class="row w-100 align-items-center">
                <div class="col">
                    <h1>Hello World</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">

</style>
