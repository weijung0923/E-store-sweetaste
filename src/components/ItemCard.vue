<template lang="">
    <div class="item-card mb-4">
        <div class="item-image" :style="{ backgroundImage : 'url(' +itemImage +')' }"></div>
        <div class="item-tag">本日精選</div>
          <div class="item-stared-icon">
            <label class="ui-checked-display">
                <input type="checkbox" class="ui-checkbox">
                <i class="material-icons ui-show">
                    favorite
                </i>
                <i class="material-icons ui-hidden">
                    favorite_border
                </i>
            </label>
        </div>
        <div class="item-body d-flex">
            <div class="item-name col p-3 text-center"> {{ itemName }} </div>
            <div class="item-number col p-3 text-center">NT$ {{ itemPrice }} </div>
        </div>
        <a class="btn-lg btn-primary-lighter btn btn-block w-100 rounded-0" href="">
            加入購物車
        </a>

    </div>
</template>

<script setup>

defineProps({
    itemName: String,
    itemPrice: Number,
    itemImage: String
})

</script>

<style lang="scss" scoped>
.item-body {
    border: 1px solid #EAF0ED;
}

.item-body {
    font-size: 1.25rem;
    color: #3F5D45;

    .item-name {
        border-right: 1px solid #EAF0ED;
    }

    .item-number {
        font-weight: bold;
    }
}
</style>