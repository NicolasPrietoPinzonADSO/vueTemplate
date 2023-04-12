export default{
    name: "my-header",
    template: /*html*/`
    <header>
		<a href="#" class="logo" v-html="header.logo"></a>

		<ul class="navlist"  ref="navlist">
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
			<div class="bx bx-menu" id="menu-icon" ></div>
		</div>
	</header>
    `,
    data(){
        return{}
    },
    props:{
        header: Object
    }
}