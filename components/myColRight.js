export default {
    name: "my-col-right",
    template: /*html*/`
    <div class="right">
		<a href="#" class="scroll">Scroll Down<i class='bx bx-chevrons-down' ></i></a>
	</div>

    `,
    // v-html="right.scroll"
    data() {
        return {}
    },
    props: {
        right: Object
    }
}