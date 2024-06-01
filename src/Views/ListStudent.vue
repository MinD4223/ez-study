<template>
    
    <div>
        <div class="btn-group position-absolute start-50 translate-middle" style="margin-top: 25px;">
            <button  type="button" class="btn btn-info " @click="allData">Tất cả các lớp</button>
            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li v-for="itemClass in listclasses" :key="itemClass.id">
                    <button  class="dropdown-item" @click="filterData(itemClass.grade,itemClass.class)" >{{ itemClass.grade + itemClass.class }}</button>
                </li>
            </ul>
        </div>

        <router-link to="/addstudent" type="button" class="btn btn-primary position-absolute end-0 " style="margin: 10px 30px 0 0;">Thêm học sinh</router-link>
    </div>

    <table class="table table-striped" style="margin: 50px 50px 0;">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ và tên</th>
                <th scope="col">Tuổi</th>
                <th scope="col">Lớp</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in liststudents" :key="student.id"  >
                <th scope="row">{{ student.id }}</th>
                <td>{{ student.name}}</td>
                <td>{{ student.age}}</td>
                <td>{{student.grade + student.class}}</td>
                <td>
                    <button @click="editStudent(student.id)" type="button" class="btn btn-success" style="margin-right: 10px ;">Sửa</button>
                    <button @click="deleteStudent(student.id)" type="button" class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
    
    <nav aria-label="Page navigation example" class="position-absolute end-0" style="margin: 40px 60px 0 0;">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for=" (item,index) in totalStudent" :key="index" @click="getDataPagination(item)" ><a class="page-link" href="#">{{item}}</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>

</template>

<script>

export default {
    
    created(){
        this.listStudent = this.$store.state.liststudents
        console.log(this.listStudent);
    },
    data(){
        return{
            listStudent: [],
            numberStudent: 2,
            paniActor: 1,
            liststudents:this.$store.getters.listStudent.slice(0, 2)
        }
    },
    computed:{
        // liststudents(){
        //     return ;
        // },
        listclasses(){
            return this.$store.state.listclasses;
        },
        totalStudent(){
            let number = Math.ceil(this.$store.getters.listStudent.length / this.numberStudent);
            let itemPagination = [];
            for(let i = 1; i <= number; i++){
                itemPagination.push(i);
            }
            return itemPagination;
        }
    },
    methods:{
        deleteStudent(studentId){
            this.$store.commit('DELETE_STUDENT', studentId);
        },
        editStudent(studentId){
            this.$router.push("/ModifyStudent/" + studentId);
        },
        filterData(filterGrade,filterClass){
            this.liststudents = this.listStudent;
            if (filterClass === "") {
                this.$store.state.liststudents= this.$store.state.liststudents.filter((student) => student.grade == filterGrade);
            }else{
                this.$store.state.liststudents = this.$store.state.liststudents.filter((student) => student.grade == filterGrade && student.class == filterClass);
            }
        },
        allData(){
            //this.$store.state.liststudents = this.listStudent;
            this.liststudents = this.$store.getters.listStudent.slice(0, 2)
        },
        getDataPagination(noPagination){
            // this.$store.state.liststudents = this.listStudent;
            this.paniActor = noPagination;
            let ini = (noPagination * this.numberStudent) - this.numberStudent;
            let final = (noPagination * this.numberStudent);

            // for (let index = ini; index < final; index++) {
            //     this.$store.getters.listStudent.push(this.$store.state.liststudents[index]); 
            // }
            // this.$store.commit('SET_PAGINATION_STUDENT',ini, final);
            this.liststudents = this.$store.state.liststudents.slice(ini, final); 
        },
        getPreviousPage(){
            if (this.paniActor > 1) {
                this.paniActor--;
            }
            this.getDataPagination(this.paniActor);
        },
        getNextPage(){
            if (this.paniActor < this.totalStudent()) {
                this.paniActor--;
            }
            this.getDataPagination(this.paniActor);
        },
    }

}
</script>

<style >
    
</style>