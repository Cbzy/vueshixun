<template>
    <div class="homeWrapper">
        <div class="mfw-travelnotes">
            <div class="navbar clearfix">
                <ul class="tn-nav">
                    <li class="active tn-nav-hot">
                        <router-link to="/home/hot">热门游记</router-link>
                        <span class="tn-menu">
                            <i class="tn-menu-icon"></i>
                            筛选
                        </span>
                    </li>
                    <li class="tn-nav-new">
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
    name:'HomeWrapper'
}
</script>
<style scoped>
@import url('../css/home.css');
@import url('../css/app.css');
</style>