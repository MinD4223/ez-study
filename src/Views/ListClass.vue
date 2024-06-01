<template>
    <router-link to="/addclass" type="button" class="btn btn-primary position-absolute end-0 " style="margin: 10px 30px 0 0;">Thêm lớp</router-link>
    <div class="listclass">
        
        <table class="table table-striped" style="margin: 50px 50px 0;">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Lớp</th>
                    <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="classitem in listclasses" :key="classitem.id" >
                    <th scope="row">{{ classitem.id }}</th>
                    <td>{{classitem.class }}</td>
                    <td>
                        <button @click="updateClass(classitem.id)" type="button" class="btn btn-success" style="margin-right: 10px ;">Sửa</button>
                        <button @click="deleteClass(classitem.id)" type="button" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        listclasses(){
            return this.$store.state.listclasses
        }
    },
    methods:{
        deleteClass(classitemId){
            this.$store.commit('DELETE_CLASS', classitemId);
        },
        updateClass(classitemId){
            this.$router.push("/ModifyClass/" + classitemId);
        }
    }
}
</script>

<style lang="css">
    
</style>