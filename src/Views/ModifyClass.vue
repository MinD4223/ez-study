<template>
    <div>
        <form @submit="onSubmit">
            <div class="mb-3">
                <label for="inputname" class="form-label">Tên lớp: </label>
                <input v-model="classitem.class" type="text" class="form-control" id="inputname" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Khối </label>
                <select v-model="classitem.grade" class="form-select" aria-label="Default select example">
                    <option >11</option>
                    <option >12</option>
                    
                </select>
            </div>
            
            
            <button @click="clickAdd" type="submit" class="btn btn-primary">Lưu</button>
        </form>
    </div>
</template>

<script>
export default {
    created(){
        this.listclasses = this.$store.state.listclasses;
        this.classitem = this.listclasses.find(itemclass => itemclass.id == this.$route.params.id);
        this.classitemIndex = this.listclasses.findIndex(itemclass => itemclass.id == this.$route.params.id);
    },
    data(){
        return {
            classitem:{
                id: "",
                class: "",
                grade: ""
            },
            listclasses: [],
            classitemIndex: -1
        }
    },
    methods:{
        clickAdd(event){
            event.preventDefault();
            this.listclasses[this.classitemIndex] = this.classitem;
            this.$store.commit('SET_CLASS', this.listclasses);
            this.$router.push("/listclass");
        }
    }
}
</script>

<style>

</style>