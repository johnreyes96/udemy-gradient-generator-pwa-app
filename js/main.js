const app = Vue.createApp({
    data: () => ({
        title: "Gradient Generator",
        firstColor: "#d5ee11",
        secondColor: "#f59e24",
        orientation: "right"
    }),
    computed: {
        setColor() {
            return `background: linear-gradient(to ${this.orientation}, ${this.firstColor}, ${this.secondColor});`
        }
    }
});