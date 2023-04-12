export default {
    name: "my-col-right",
    template: /*html*/`
    <div class="right">
        <a href="#" class="scroll" v-text="right.scroll"></a>
    </div>

    `,
    data() {
        return {}
    },
    props: {
        right: Object
    }
}