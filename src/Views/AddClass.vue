<template>
<h3>Thêm Lớp</h3>
    <div>
        <form @submit="onSubmit">
            <div class="mb-3">
                <label for="inputname" class="form-label">Tên lớp: </label>
                <input v-model="classitem.class" type="text" class="form-control" id="inputname" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Lớp cha: </label>
                <select v-model="classitem.grade"  class="form-select" aria-label="Default select example">
                    <option v-for="classItem in listClassAfterHandle" :key="classItem.id">{{classItem.class}}</option>
                </select>
            </div>
            <button @click="clickAdd" type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            classitem:{
                id: Math.floor(Math.random() * 1000),
                grade: "",
                class: "",
            },
            listclasses: this.$store.state.listclasses
        }
    },
    computed:{
        listClassAfterHandle(){
            let listClasses = this.$store.state.listclasses;
            return this.handleConvertClasses(listClasses, 0)
        }
    },
    methods:{
        clickAdd(){
            event.preventDefault();
            this.$store.commit('ADD_CLASS',{
                id: this.classitem.id,
                grade: this.classitem.grade,
                class: this.classitem.class
            });
            this.$router.push("/listclass");
        },
        handleConvertClasses(listClasses, countGrade){
            
        }
    }
}
</script>

<style>

</style>