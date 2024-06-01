<template>
    <form @submit="onSubmit">
        <div class="mb-3">
            <label for="inputname" class="form-label">Tên : </label>
            <input
                type="text"
                class="form-control"
                id="inputname"
                v-model="student.name"
            />
        </div>
        <div class="mb-3">
            <label for="inputname" class="form-label">Tuổi: </label>
            <input
                type="text"
                class="form-control"
                id="inputage"
                v-model="student.age"
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Lớp cha: </label>
            <select
                class="form-select"
                aria-label="Default select example"
                v-model="student.parentClassID"
            >
                <option
                    v-for="classItem in resultClasses"
                    :key="classItem.id"
                    :value="classItem.id"
                >
                    {{ classItem.name }}
                </option>
            </select>
        </div>
        <button @click="clickAdd" type="submit" class="btn btn-primary">
            Lưu
        </button>
    </form>
</template>

<script>
export default {
    created() {
        this.listStudent = this.$store.getters.listStudent;
        this.student = this.listStudent.find(
            (x) => x.id == this.$route.params.id
        );
        this.currentStudentIndex = this.listStudent.findIndex(
            (x) => x.id == this.$route.params.id
        );
        this.traverseList(this.$store.state.listclasses);
    },
    computed: {
        uniqueClasses() {
            return this.$store.getters.uniqueClasses;
        },
    },
    data() {
        return {
            student: {
                id: "",
                name: "",
                age: "",
                parentClassID: "",
                classs: "",
            },
            currentStudentIndex: -1,
            listStudent: [],
            uniqueClass: [],
            resultClasses: [],
        };
    },
    methods: {
        clickAdd() {
            event.preventDefault();

            this.listStudent[this.currentStudentIndex] = this.student;
            // Lưu lại vào store
            this.$store.commit("SET_STUDENTS", this.listStudent);
            this.$router.push("/");
        },
        traverseList(items, prefix = "") {
            for (const item of items) {
                this.resultClasses.push({
                    id: item.id,
                    name: prefix + item.class,
                });
                this.traverseList(item.childClass, prefix + "--"); // Add "--" for child classes
            }
        },
    },
};
</script>

<style></style>
