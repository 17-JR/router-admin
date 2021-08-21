<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="goback">后退</button>
    <h4 class="text-center">用户详情---{{this.$route.params.id}}----{{id}}</h4>
    <tbody>
        <tr>
          <td>{{itemlist.id}}</td>
          <td>{{itemlist.name}}</td>
          <td>{{itemlist.age}}</td>
          <td>{{itemlist.position}}</td>
        </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  name: 'MyUserDetail',
  // 接收路由参数
  props:['id'],
  created(){
    const id =this.id-1
    this.itemlist=this.userlist[id]
  },
  data() {
    return {
      // 用户列表数据
      userlist: [
        { id: 1, name: '嬴政', age: 18, position: '始皇帝' },
        { id: 2, name: '李斯', age: 35, position: '丞相' },
        { id: 3, name: '吕不韦', age: 50, position: '商人' },
        { id: 4, name: '赵姬', age: 48, position: '王太后' }
      ],
      itemlist:[]
    }
  },
  methods:{
    goback(){
      console.log("OK")
      this.$router.push('/home/user');
    }
  },

}
</script>

<style lang="less" scoped></style>
