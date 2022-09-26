<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="border-bottom border-warning"
    shadow
  >

    <b-navbar-brand class ="mt-3"  href="/">
      <b-icon
        icon="clipboard-check"
        variant="white"
        style="width: 48px; height: 48px;"
        class=" px-1 d-inline-block align-top pb-3"
      ></b-icon> Lista de Tarefas
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          v-b-popover.hover.bottomright="'Lista de Tarefas'"
          href="/list"
        >Tarefas</b-nav-item>
          <b-nav-item
            v-b-popover.hover.bottomright="'Adicionar nova Tarefa'"
            href="/form"
          >Nova Tarefa
            </b-nav-item>

      </b-navbar-nav>

      </b-collapse>
      </b-navbar>
</template>

<script>
export default {
  name: "formAddTask"
};
</script>
  
  <style>
@import url("https://fonts.googleapis.com/css2? family= Montserrat:wght@400;500;600 & display=swap");

.title {
  font-weight: 500;
}

.navbar {
  background-color: #181848;
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.45);
}
</style>
  