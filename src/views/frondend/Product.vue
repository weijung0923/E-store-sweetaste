<template>
    <div class="container">

        <header class="header">
            <div class="header-main-image bg-cover" style="background-image:url(https://bit.ly/2Qodh3Z)">
                <img src="../../assets/image/lg-想吃甜點是不需要理由的.svg" width="89" class="header-image-context" alt="">
            </div>
        </header>



        <div class="row mt-3 mt-md-6">
            <div class="col-11 col-md-6 col-lg-4">
                <ul class="list-group text-24 text-center font-weight-bold">
                    <li class="list-group-item list-group-item-action h4 active" aria-current="true">甜點類別</li>
                    <li class="list-group-item list-group-item-action h4 active">所有甜點</li>
                    <li class="list-group-item list-group-item-action h4 ">本日精選</li>
                    <li class="list-group-item list-group-item-action h4">人氣推薦</li>
                    <li class="list-group-item list-group-item-action h4">新品上市</li>
                </ul>
            </div>

            <div class="col-11 col-md-6 col-lg-8">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-6">
                        <ItemCard itemName="焦糖馬卡龍" itemPrice=450 itemImage="https://bit.ly/2QbVsVR" />
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <ItemCard itemName="焦糖馬卡龍" itemPrice=450 itemImage="https://bit.ly/2QbVsVR" />
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <ItemCard itemName="焦糖馬卡龍" itemPrice=450 itemImage="https://bit.ly/2QbVsVR" />
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <ItemCard itemName="焦糖馬卡龍" itemPrice=450 itemImage="https://bit.ly/2QbVsVR" />
                    </div>
                </div>
                <nav class="mt-1 d-flex justify-content-end">
                    <ul class="pagination pagination-lg">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</template>

<script setup>
import ItemCard from '../../components/ItemCard.vue';

</script>

<style lang="scss" scoped>
    .list-group-item{
        margin-bottom: 0px;
    }
</style>