<template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile">
        <img src="../assets/diiki.jpeg" alt="">
        <h3>Dicky syaputra</h3>
        <p>Universitas Islam Negeri Sultan Syarif Kasim Riau</p>
      </div>
      <div class="sosial-links">

        <div class="link">
          <a href="https://github.com/Dickysyaputra0912"><img src="../assets/github.jpeg" alt="" style="width:30px;height:30px;" >
            <h2>GitHub</h2></a>
        </div>
        <div class="link">
          <a href="https://www.instagram.com/dkysyaptra_/"><img src="../assets/instagram.jpeg" alt="" style="width:30px;height:30px;">
            <h2>Instagram</h2></a>
        </div>

        <div class="link">
          <a href="http://wa.me/6282274268796"><img src="../assets/wa.jpeg" alt="" style="width:30px;height:30px;">
            <h2>WhatsApp</h2></a>
        </div>

      </div>
    </div>
    <div class="container-two">
      <div class="about-me">
        <h1>About Me</h1>
        <p>Nama Saya Dicky syaputra Saya Lahir Pada Tanggal 9 Desember 2001 kota pekanbaru, Sekarang saya  Tinggal Di Pekanbaru. Saya sekarang Mahasiswa Aktif di Universitas Islam Negeri Sultan Syarif Kasim Riau</p>
      </div>
      <div class="tecnology-section">
        <h1>personal skills</h1>

      </div>
      <div class="button-container">
        <div class="project-button">
          <a href="">My Project</a>
        </div>
      </div>
      <div>
        <img src="../assets/hydra.png" style="width: 300px; height: 300px;">
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
img{
  height: 35px;
}
.main-container{

  display: flex;
  flex-direction: row;
  background:url("../assets/foto baju.jpg");
  background-size: cover;
  border-radius: 25px;

}
.container-one{
  background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255)),center/cover no-repeat;
  padding: 2.5%;
  margin: 2%;
  color: rgba(3, 3, 3, 0.94);
  width: 30%;
  border-radius: 25px;
}

.profile img{
  background-color: rgb(195, 214, 208) ;
  height: 13rem;
  border-radius: 30%;
}
.link a{
  text-decoration: none;
  color: rgb(67, 67, 67);
  font-size: 10px;
}
.link img{
  height: 13rem;
}
.container-two{
  background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255)),center/cover no-repeat;
  margin: 2.5%;
  margin-left: 2%;
  border-radius: 2%;
  color: rgba(3, 3, 3, 0.94);
  width: 70%;
}
.about-me{
  padding: 50px;
  text-align: center;
}
.logo img{
  height: 4rem;
}

.button-container{
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


}

.project-button{
  background-color: rgb(0, 0, 0) ;
  border-radius: 25%;
  padding: 5px;
  margin: 6px;
}
.project-button a{
  text-decoration: none;
  color: rgb(255, 255, 255);
}

</style>
