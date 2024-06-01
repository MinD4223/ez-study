<template>
  <header>
    <div class="wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid">
                <a class="navbar-brand text-warning" href="#">ezStudy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link active">Student</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/listclass" class="nav-link">Class</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  </header>
  <router-view/>
  
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
