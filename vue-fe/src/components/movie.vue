<template>
    <div>
        <div v-for="(movie, id) in datas" v-bind:key="id">
            <div>{{movie.title}} {{movie.year}}</div>
            <div>
                <div v-for="genre in movie.genre" v-bind:key="genre">
                    {{genre}}
                </div>
            </div>
        </div>
        <div>
            <form id="createForm">
            <div>
                <label for="input_title">
                    <span>
                        Title : 
                    </span>
                </label>
                <input type="text" id="input_title" v-model="title">
            </div>
            <div>
                <label for="input_year">
                    <span>
                        Year : 
                    </span>
                </label>
                <input type="text" id="input_year" v-model="year">
            </div>
            <div>
                <label for="input_genre">
                    <span>
                        Genre : 
                    </span>
                </label>
                <div id="input_genre">
                    <label for="Action">
                        <span>Action : </span>
                    </label>
                    <input type="checkbox" id="Action" v-model="checkDatas" value="Action">

                    <label for="Horror">
                        <span>Horror : </span>
                    </label>
                    <input type="checkbox" id="Horror" v-model="checkDatas" value="Horror">

                    <label for="Romance">
                        <span>Romance : </span>
                    </label>
                    <input type="checkbox" id="Romance" v-model="checkDatas" value="Romance">

                    <label for="Thriller">
                        <span>Thriller : </span>
                    </label>
                    <input type="checkbox" id="Thriller" v-model="checkDatas" value="Thriller">
 

                    <label for="Comedy">
                        <span>Comedy : </span>
                    </label>
                    <input type="checkbox" id="Comedy" v-model="checkDatas" value="Comedy">
                </div>
            </div>
            </form>
            <button v-on:click="createMovie()">Create</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';

    export default {
        name: "Movie",
        data(){
            return {
                datas: [],
                title: '',
                year: '',
                checkDatas: []
            }
        },
        created: function() {
            const URL = 'http://localhost:8080/movie';
            axios.get(`${URL}`).then(result => {
                this.datas = result.data;
            })
        },
        methods:{
            createMovie: function() {
                const URL = 'http://localhost:8080/movie'
                axios.post(`${URL}`, 
                qs.stringify({
                    title: this.title,
                    year: this.year,
                    genre: this.checkDatas
                }))
                window.location.reload();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>