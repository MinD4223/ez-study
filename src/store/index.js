import {createStore} from 'vuex'
const store = createStore({
    state(){
        return{
            liststudents: [
                {
                    id: "1",
                    name: "Tran Trung Kien",
                    age: "15",
                    grade: "12",
                    class: "B"
                },
                {
                    id: "2",
                    name: "Dang Thanh Trung",
                    age: "16",
                    grade: "12",
                    class: "A"
                },
                {
                    id: "3",
                    name: "Tran Dang Hung",
                    age: "16",
                    grade: "12",
                    class: "A"
                },
                {
                    id: "4",
                    name: "Tran Dang Hung",
                    age: "16",
                    grade: "12",
                    class: "A"
                },
                
            ],

            listclasses:[
                {
                    id: 1,
                    class: "11ABC",
                    childClass: [
                        {
                            id: 2,
                            class: "12A",
                            childClass: []
                        },
                        {
                            id: 3,
                            class: "11B",
                            childClass: []
                        },
                    ]
                },
                {
                    id: 4,
                    class: "13B",
                    childClass: []
                },
            ]
        }
    },
    getters:{
        listStudent(state){
            return state.liststudents;
        },
        uniqueClasses(state){
            let unique =[];
            for (let i = 0; i < state.listclasses.length; i++) {
                if (i === 0 || state.listclasses[i].class !== state.listclasses[i - 1].class) {
                    unique.push(state.listclasses[i].class);
                  } 
            }
            return unique;
        }

    },
    mutations:{
        DELETE_STUDENT(state, studentId){
            state.liststudents = state.liststudents.filter(student => student.id != studentId);
        },
        DELETE_CLASS(state, classitemId){
            state.listclasses = state.listclasses.filter(classitem => classitem.id != classitemId )
        },
        ADD_STUDENT(state, newStudent){
            state.liststudents.unshift(newStudent);
        },
        ADD_CLASS(state,newClass){
            state.listclasses.unshift(newClass);
        },
        
        SET_STUDENTS(state, lstStudents){
            state.liststudents = lstStudents
        },
        SET_CLASS(state, listclasses){
            state.listclasses = listclasses;
        },
        // SET_PAGINATION_STUDENT(state, getters, ini, final){
        //     getters.listStudent = state.liststudents.slice(ini,final);
        // }

    },
    
})

export default store;