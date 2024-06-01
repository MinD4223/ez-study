<template>
    <h3>Thêm sinh viên</h3>
    <div class="add">
        
    <form @submit="onSubmit">
        <div class="mb-3">
            <label for="inputname" class="form-label">Họ và tên: </label>
            <input v-model="student.name" type="text" class="form-control" id="inputname" >
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Ngày sinh: </label>
            <input v-model="student.age" type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Lớp </label>
            <select v-model="student.classs" class="form-select" aria-label="Default select example">  
                <option v-for="itemClass in resultClasses" :key="itemClass.id" :value="itemClass.id">{{itemClass.name}}</option>
            </select>
        </div>

        <button @click="add_Student" type="submit" class="btn btn-primary">Lưu</button>
    </form>
    </div>
</template>

<script>

export default {
    methods: {
        traverseList(items, prefix = "") {
            for (const item of items) {
                this.resultClasses.push({
                    id: item.id,
                    name: prefix + item.class
                });
                this.traverseList(item.childClass, prefix + "--"); // Add "--" for child classes
            }
        },
        onSubmit(event){
            event.preventDefault();
            this.yearOfBirth = new Date(this.student.age).getFullYear();
            this.yearOfNow = new Date().getFullYear();
            this.$store.commit('ADD_STUDENT',{
                id: Math.floor(Math.random() * 1000),
                name: this.student.name,
                age:this.yearOfNow - this.yearOfBirth,
                grade: this.student.classs[0] + this.student.classs[1],
                class: this.student.classs.charAt(2)
            });
            this.$router.push("/");
        }
    },
    data(){
        return{
            student:{
                name: '',
                age: '',
                classs: ''
            },
            resultClasses: []
        }
    },
    created(){
        this.traverseList(this.$store.state.listclasses)
    },
}
</script>

<style lang="css">
    .add{
        width: 500px;
        margin: 100px 100px 0;
    }
</style>