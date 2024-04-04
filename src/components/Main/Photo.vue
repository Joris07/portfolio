<template>
    <div id="avatar" class="observer" ref="avatar">
      <img src="/icons/avatar.svg" alt="Joris">
    </div>
  </template>
  
  
  
<style scoped>
    #avatar {
		width: 225px;
		height: 225px;
		border-radius: 50%;
		background-color: var(--color-blanc);
		overflow: hidden;
		perspective: 1000px; /* Perspective pour l'effet 3D */
  		transition: transform 0.5s; /* Transition fluide */
	}

    #avatar img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

    #avatar:hover {
        transform:scale(1.1);
    }
</style>
  