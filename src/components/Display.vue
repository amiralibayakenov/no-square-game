<template>
  <div  class="display">
    <!-- <div class="container"> -->
      <header>
        <h1>No-square game!</h1>
        <h2>Click on a circle.</h2>  
      </header>

      <div class="table">
        <table>
          <tr>
            <th><div @click="selectPoint(1, 5, 9, 5, 1)" class="circle 1"></div></th>
            <th><div @click="selectPoint(2, 5, 8, 6, 2)" class="circle 2"></div></th>
            <th><div @click="selectPoint(3, 5, 7, 7, 3)" class="circle 3"></div></th>
            <th><div @click="selectPoint(4, 5, 6, 8, 4)" class="circle 4"></div></th>
            <th><div @click="selectPoint(5, 5, 5, 9, 5)" class="circle 5"></div></th>
          </tr>

          <tr>
            <th><div @click="selectPoint(1, 4, 8, 4, 6)" class="circle 6"></div></th>
            <th><div @click="selectPoint(2, 4, 7, 5, 7)" class="circle 7"></div></th>
            <th><div @click="selectPoint(3, 4, 6, 6, 8)" class="circle 8"></div></th>
            <th><div @click="selectPoint(4, 4, 5, 7, 9)" class="circle 9"></div></th>
            <th><div @click="selectPoint(5, 4, 4, 8, 10)" class="circle 10"></div></th>
          </tr>

          <tr>
            <th><div @click="selectPoint(1, 3, 7, 3, 11)" class="circle 11"></div></th>
            <th><div @click="selectPoint(2, 3, 6, 4, 12)" class="circle 12"></div></th>
            <th><div @click="selectPoint(3, 3, 5, 5, 13)" class="circle 13"></div></th>
            <th><div @click="selectPoint(4, 3, 4, 6, 14)" class="circle 14"></div></th>
            <th><div @click="selectPoint(5, 3, 3, 7, 15)" class="circle 15"></div></th>
          </tr>

          <tr>
            <th><div @click="selectPoint(1, 2, 6, 2, 16)" class="circle 16"></div></th>
            <th><div @click="selectPoint(2, 2, 5, 3, 17)" class="circle 17"></div></th>
            <th><div @click="selectPoint(3, 2, 4, 4, 18)" class="circle 18"></div></th>
            <th><div @click="selectPoint(4, 2, 3, 5, 19)" class="circle 19"></div></th>
            <th><div @click="selectPoint(5, 2, 2, 6, 20)" class="circle 20"></div></th>
          </tr>

          <tr>
            <th><div @click="selectPoint(1, 1, 5, 1, 21)" class="circle 21"></div></th>
            <th><div @click="selectPoint(2, 1, 4, 2, 22)" class="circle 22"></div></th>
            <th><div @click="selectPoint(3, 1, 3, 3, 23)" class="circle 23"></div></th>
            <th><div @click="selectPoint(4, 1, 2, 4, 24)" class="circle 24"></div></th>
            <th><div @click="selectPoint(5, 1, 1, 5, 25)" class="circle 25"></div></th>
          </tr>

        </table>

      </div>

      <div class="right-sidebar">
        <h3>Avoid the square</h3>
        First player is <h4 id="orange">ORANGE</h4>
        Second player is <h4 id="blue">BLUE</h4>
        <div id="left-footer">
          Player is about to make move:
          <div id="box"></div>
        </div>
      </div>

      <footer>
      </footer>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
    }
  },
  computed: {
    countA() {
      return this.$store.getters.countA
    },
    countB() {
      return this.$store.getters.countB
    },
    turn() {
      return this.$store.getters.turn
    },
  },
  methods: {
    selectPoint(x, y, m, n, id) {
      var thisEl = document.getElementsByClassName('circle '+id)
      var box = document.getElementById('box')
      if(this.turn){
        this.$store.dispatch('selectAPoint', {pointID: this.countA, value: {x: x, y: y, m: m, n: n}})
        this.$store.dispatch('changeTurn')
        thisEl[0].style.backgroundColor = '#c66b3d'
        box.style.backgroundColor = '#26495c'
      }
      else{
        this.$store.dispatch('selectBPoint', {pointID: this.countB, value: {x: x, y: y, m: m, n: n}})
        this.$store.dispatch('changeTurn')
        thisEl[0].style.backgroundColor = '#26495c'
        box.style.backgroundColor = '#c66b3d'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.display {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 100px 600px auto;
  grid-template-columns: 600px auto;
}

header {
  grid-row: 1;
  grid-column: 1/3;
  background-color: #F1F1F1;
}

.table {
  grid-row: 2;
  grid-column: 1/2;
  background-color: #F1F1F1;
  padding-left: 50px;
}

table {
  width: 550px;
  height: 550px;
  table-layout: fixed;
  margin: 0px;
  padding: 0px;
}

.right-sidebar {
  grid-row: 2;
  grid-column: 2/3;
}

footer {
  grid-row: 3;
  grid-column: 1/3;
}

.circle {
  display: block;
  height: 80px;
  width: 80px;
  border: 10px solid #5F5F5F;
  border-radius: 50%;
  top: 0px;
  left: 0px;
  margin: 0px;
}

.circle:hover {
  background-color: #5F5F5F;
}

#orange {
  color: #c66b3d;
}

#blue {
  color: #26495c;
}

#box {
  margin-left: 430px;
  height: 50px;
  width: 90px;
  background-color: #c66b3d;
}
</style>
