export default {
    name: "my-column-left",
    template:/*html*/`
    <div class="left">
		<a href="#"><i class='bx bxl-twitter' ></i></a>
		<a href="#"><i class='bx bxl-instagram' ></i></a>
		<a href="#"><i class='bx bxl-facebook' ></i></a>
	</div>

    `,
    data(){
        return{}
    },
    props:{
        left: Object
    }
}