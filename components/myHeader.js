export default{
    name: "my-header",
    template: /*html*/`
    <header>
		<a href="#"  class="logo" v-html="header.logo"></a>

		<ul ref="navlist" class="navlist"  ref="navlist">
			<li><a href="#" v-text="header.nav[0]"></a></li>
			<li><a href="#" v-text="header.nav[1]"></a></li>
			<li><a href="#" v-text="header.nav[2]"></a></li>
			<li><a href="#" v-text="header.nav[3]"></a></li>
			<li><a href="#" v-text="header.nav[4]"></a></li>
		</ul>

		<div class="icons">
			<a href="#"><i class='bx bx-search-alt-2'></i></a>
			<a href="#"><i class='bx bx-cart'></i></a>
			<a href="#"><i class='bx bx-phone'></i></a>
			<div ref="menuIcon" @click="tocar" class="bx bx-menu" id="menu-icon" ></div>
		</div>
	</header>
    `,
    data(){
        return{
			menu:false
		}
    },
    props:{
        header: Object
    },
	methods:{
		tocar(){
			this.menu = !this.menu
			this.$refs.menuIcon.classList.toggle('bx-x');
			this.$refs.navlist.classList.toggle('open');
		}
	}
}