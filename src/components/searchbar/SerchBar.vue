<script lang="ts" src="./SearchBar.ts"></script>

<template>
    <div class="searchbar-container">
        <input 
            type="text" 
            placeholder="Buscar lugares..."
            v-model="searchTerm"
            class="form-control">

        <!--Lista  -->
        <SearchResults></SearchResults>
    </div>
</template>


<style scoped>

    .searchbar-container{
        position: fixed;
        top: 30px;
        left: 30px;
        background-color: white;
        z-index: 999;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        width: 325px;
        border-radius: 10px !important;
        overflow: hidden;
        padding: 5px;
    }

    

</style>