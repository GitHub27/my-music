<template>
  <div>
    <Rating :grade=2 />
    {{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>
<script>
import Rating from '../components/rating'
export default {
  name: "awesomeIcons",
  components: {
    Rating
  },
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>
.rating {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #a7a8a8;
}
.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
}
.list:hover .star {
  color: #f3d23e;
}
.star {
  display: inline-block;
  cursor: pointer;
}
.star:hover ~ .star:not(.active) {
  color: inherit;
}
.active {
  color: #f3d23e;
}
</style>
