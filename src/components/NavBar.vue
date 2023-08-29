<template>
	<nav class="navbar navbar-expand-lg navbar-light py-2 py-lg-4">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img src="../assets/image/flex-ex-img3.svg" alt="" height="40">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<!-- <span class="navbar-toggler-icon"></span> -->
				<i class="fa-solid fa-utensils"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<router-link to="/" class="nav-link">首頁</router-link>
						<!-- <a class="nav-link active fs-lg-5" aria-current="page" href="#">首頁</a> -->
					</li>
					<li class="nav-item">
						<router-link to="/product" class="nav-link">甜點</router-link>
						<!-- <a class="nav-link" href="#product">甜點</a> -->
					</li>
					<li class="nav-item">
						<router-link to="/login" class="nav-link">登入</router-link>
						<!-- <a class="nav-link" href="#">登入</a> -->
					</li>
					<li class="nav-item">
						<a class="nav-link" href="cart.html">
							<i class="material-icons">
								shopping_cart
							</i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<!--  -->
</template>
<script>
</script>
<style>

</style>