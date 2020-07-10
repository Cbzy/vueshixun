<template>
    <div class="homeWrapper">
        <div class="mfw-travelnotes">
            <div class="navbar clearfix">
                <ul class="tn-nav">
                    <li :class="{'active':currentSort==0}" @click="getItem(index)" class="tn-nav-hot">
                        <router-link to="/home/hot">热门游记</router-link>
                        <span class="tn-menu">
                            <i class="tn-menu-icon"></i>
                            筛选
                        </span>
                    </li>
                    <li :class="{'active':currentSort==1}" @click="getItem(index)" class="tn-nav-new">
                        <router-link to="/home/new">最新发表</router-link>
                    </li>
                </ul>
                <div class="tn-write">
                    <a href="#" class="btn-add">
                        <i></i>
                        写游记
                    </a>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    name:'HomeWrapper',
    data(){
        return{
            currentSort:0,
            index:0
        }
    },
    methods:{
        getItem(index){
            if(this.index){
                this.currentSort = index;
                this.index=0;
            }else{
                this.currentSort = index;
                this.index=1;
            }
            
            
        }
    }
}
</script>
<style scoped>
@import url('../css/home.css');
@import url('../css/app.css');
</style>