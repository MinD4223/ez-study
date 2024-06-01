<template>
    <form @submit="onSubmit" >
            <div class="mb-3">
                <label for="inputname" class="form-label">Tên : </label>
                <input  type="text" class="form-control" id="inputname" v-model="student.name">
            </div>
             <div class="mb-3">
                <label for="inputname" class="form-label">Tuổi: </label>
                <input type="text" class="form-control" id="inputage" v-model="student.age" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Khối </label>
                <select class="form-select" aria-label="Default select example" v-model="student.grade">
                    <option > 11</option>      
                    <option >12</option> 
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Lớp </label>
                <select  class="form-select" aria-label="Default select example" v-model="student.class">
                    <option v-for="(itemClass,index) in uniqueClasses" :key="index">{{itemClass}}</option>       
                </select>
            </div>
  
            <button @click="clickAdd" type="submit" class="btn btn-primary">Lưu</button>
            
        </form>
</template>

<script>
export default {
    created(){
        this.listStudent = this.$store.getters.listStudent;
        this.student = this.listStudent.find(x => x.id == this.$route.params.id);
        this.currentStudentIndex = this.listStudent.findIndex(x => x.id == this.$route.params.id);
    },
    computed:{
        uniqueClasses(){
            return this.$store.getters.uniqueClasses;
        }
    },
    data(){
        return{
            student:{
                id: "",
                name: "",
                age: "",
                grade: "",
                classs: ""
            },
            currentStudentIndex: -1,
            listStudent: [],
            uniqueClass: [],
            
        }
    },
   methods: {
    clickAdd(){
        event.preventDefault();
        
        this.listStudent[this.currentStudentIndex] = this.student;
        // Lưu lại vào store
        this.$store.commit('SET_STUDENTS', this.listStudent);
        this.$router.push("/")
    }
   },
    
}
</script>

<style>

</style>