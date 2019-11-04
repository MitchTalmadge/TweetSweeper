<template>
    <div class="footer">
        <div class="container-fluid h-100 d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col">
                    <a href="https://github.com/MitchTalmadge/CleanTweets" class="h5 text-light">
                        <font-awesome-icon :icon="['fab', 'github']"/>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class FooterComponent extends Vue {

  }
</script>

<style scoped lang="scss">
    .footer {
        height: 50px;
        width: fit-content;

        padding-right: 30px;
        box-sizing: content-box;

        border: 2px solid #ccc;
        border-left: none;
        border-bottom: none;
        border-top-right-radius: 50px;

        background-color: #444;
        color: white;
    }
</style>
