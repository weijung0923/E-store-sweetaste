<template lang="">
    <div class="container mt-6 mb-6 d-none d-md-block">
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto">
                <div class="row">
                    <div class="col-12 col-md-10 col-lg-8 text-secondary mx-auto">
                        <div class="h1 text-center bg-primary p-4 mb-0">會員登入</div>
                        <form class="bg-primary">
                            <div class="input-group px-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-secondary p-4">
                                        <i class="material-icons text-primary">person</i>
                                    </span>
                                </div>
                                <input type="email" class="form-control bg-secondary py-2 text-primary" placeholder="電子信箱/手機號碼">
                            </div>
                            <div class="input-group px-3 mt-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-secondary p-4">
                                        <i class="material-icons text-primary">vpn_key</i>
                                    </span>
                                </div>
                                <input type="password" class="form-control bg-secondary py-2 text-primary" placeholder="請輸入使用者密碼">
                            </div>
                            <div class="form-check mt-3 mx-3">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    記住我
                                </label>
                            </div>
                            <button class="btn btn-accent btn-lg d-flex justify-content-center rounded-0 w-100 mt-5 p-3 text-primary fw-bolder">登入帳號</button>
                        </form>
                    </div>
                    <!-- <div class="col-6">

                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .form-control{   
        border: none;
        box-shadow: none;
        outline: 0 none;
    }
</style>