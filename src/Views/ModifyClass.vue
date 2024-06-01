<template>
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
    created() {
        this.listclasses = this.$store.state.listclasses;
        this.classitem = this.listclasses.find(
            (itemclass) => itemclass.id == this.$route.params.id
        );
        this.classitemIndex = this.listclasses.findIndex(
            (itemclass) => itemclass.id == this.$route.params.id
        );
        this.traverseList(this.listclasses);
    },
    data() {
        return {
            classitem: {
                id: "",
                class: "",
                parentClassID: "",
            },
            listclasses: [],
            classitemIndex: -1,
            resultClasses: [],
        };
    },
    methods: {
        clickAdd(event) {
            event.preventDefault();
            this.listclasses[this.classitemIndex] = this.classitem;
            this.$store.commit("SET_CLASS", this.listclasses);
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
