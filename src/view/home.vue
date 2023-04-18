<template>
  <!--banner image-->

  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div  class="images">
      <div class="profile">
        <img src="../assets/diiki.jpeg" class="rounded-circle"
             height="300px" width="300px">
      </div>
      <div class="content text-center">
        <h1>Dicky syaputra</h1>
        <h3>1215015116</h3>
        <h4>Saya Mahasiswa Teknik informatika</h4>
        <h5>Universitas Islam Negeri Sultan Syarif Kasim Riau</h5>
        <div class="welcome">
          <h2>Welcome my portofolio </h2>

        </div>

      </div>
      <div class="background">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.text-center{
  margin-top: 20px;
  color: rgb(43, 60, 77);

}
.welcome{
  margin-top: 100px;
}

.images {
  margin-top: -90px;
}

.profile {
  padding-top: 20px;
}

#app{
  background: #dbdee1;

}


</style>
