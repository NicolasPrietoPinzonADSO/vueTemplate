export default{
    name: "my-section",
    template: /*html*/`
    <section class="main-header">
		<div class="main-text">
			<h5 v-text="section.titleOne"></h5>
			<h1 v-html="section.titleTwo"></h1>
			<p v-html="section.mainText"></p>
			<div class="main-btn">
				<a href="#" class="btn" v-text="section.firstBtn"></a>
				<a href="#" class="btn btn2" v-text="section.secondBtn"></a>
			</div>
		</div>
	</section>
    `,
    data(){
        return{}
    },
    props:{
        section: Object
    }

}