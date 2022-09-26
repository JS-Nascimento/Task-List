<template>
    <div id="align">
        <b-jumbotron id="fundo">
            <h1 class="text-uppercase">Task List</h1>
            <p>Projeto do Assessment de VueJS por <a href="https://github.com/JorgeInfnet">Jorge Nascimento</a></p>
            <p>Código do Projeto em meu repositório <a href="https://github.com/JorgeInfnet">https://github.com/JorgeInfnet</a></p>
        </b-jumbotron>
    </div>
</template>

<script>
import ToastMixin from "@/mixins/toastMixin.js";

export default {
  name: "Home",
}
</script>

<style>
#fundo{
    background-color: #7890a8;
}

#fundo h1{
    color: #f0a818;
    font-weight: 700 !important;
    font-size: 11rem !important;
}

#fundo p{
    color: #f0a818;
    font-weight: 400 !important;
    font-size: 20px !important;
}

#fundo a{
    font-family: 'Dancing Script', cursive;
    text-decoration: none;
    color: #f0a818;
    font-weight: 600 !important;
    font-size: 24px;
}

#align{
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    #fundo h1{
    color: #f0a818;
    font-weight: 700 !important;
    font-size: 5rem !important;
}
}

</style>

