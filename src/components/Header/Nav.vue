<template>
	<nav id="nav_menu">
		<ul>
			<li>
				<a href="#avatar" class="sans_decoration a_menu"><p class="line"></p>{{ $t('header.menu.about') }}</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="#experience" class="sans_decoration a_menu"><p class="line"></p>{{ $t('header.menu.experience') }}</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="#projets" class="sans_decoration a_menu"><p class="line"></p>{{ $t('header.menu.projets') }}</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
	nav ul {
		padding: 0;
	}

	nav li {
		list-style: none;
	}

	nav {
		margin-top: 20%;
	}

	nav > a {
		transition: color 0.3s ease-in-out;
	}

	.a_menu {
		display: flex;
		align-items: center;
		gap: 5%;
		width: 175px;
	}

	.a_menu:hover {
		color: var(--color-bleu);
	}

	.line {
		border-top: 1px solid var(--sans-decoration); 
		width: 40px;
		transition: width 0.2s ease-in-out;
	}

	a:hover .line {
		width: 75px;
		border-top: 2px solid var(--color-bleu); 
	}

	@media (max-width: 1100px) {
        nav {
			display: none;
		}
	}
</style>