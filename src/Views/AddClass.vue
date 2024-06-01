<template>
    <h3>Thêm Lớp</h3>
    <div>
        <form @submit="onSubmit">
            <div class="mb-3">
                <label for="inputname" class="form-label">Tên lớp: </label>
                <input
                    v-model="classitem.class"
                    type="text"
                    class="form-control"
                    id="inputname"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Lớp cha:
                </label>
                <select
                    v-model="classitem.parentClassID"
                    class="form-select"
                    aria-label="Default select example"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            classitem: {
                id: Math.floor(Math.random() * 1000),
                parentClassID: "",
                class: "",
            },
            resultClasses: [],
        };
    },
    created() {
        this.traverseList(this.$store.state.listclasses);
    },
    mounted() {
        console.log(this.resultClasses);
    },
    methods: {
        clickAdd() {
            event.preventDefault();
            this.$store.commit("ADD_CLASS", {
                id: this.classitem.id,
                parentClassID: this.classitem.parentClassID,
                class: this.classitem.class,
            });
            this.$router.push("/listclass");
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
