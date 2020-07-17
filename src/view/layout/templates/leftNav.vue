<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" @select="handleSelect" v-for="(item,index1) in menuList" :key="index1">
        <el-submenu :index="index1.toString()"  >
          <template slot="title">
            <i class="el-icon-message"></i>{{item.name}}
          </template>
          <el-menu-item index="1-asd1">{{item.items}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  <right></right>
  </el-container>
</template>

<script>
import right from './right.vue'

export default {
  data() {
    return {
      menuList:[{
        name:"主页",
        items:"员工入职"
      }]
    };
  },
  created() {
 
  },
  methods: {
    handleSelect(index, indexPath) {
        console.log(index)
      // console.log(index);
      // console.log("当前选中路径", index, indexPath);
    }
  },
  computed: {
    routes() {
      // console.log(this.$route.path);
      // this.$router.replace('/right')
      return true;
    }
  },
  components:{
    right
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>