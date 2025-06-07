let mixin = {
    data() {
        return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };
    },
    computed: {
        getLeft() {
            return this.$store.getters.getcomputedData('theNavbar').main.marginL
        },
        getRight() {
            return this.$store.getters.getcomputedData('theNavbar').main.marginR
        },
        getTop() {
            return this.$store.getters.getcomputedData('theNavbar').main.marginT
        },
        getBottom() {
            return this.$store.getters.getcomputedData('theNavbar').main.marginB
        }
    },
    watch: {
        getLeft(val) {
            this.left = val
        },
        getRight(val) {
            this.right = val
        },
        getTop(val) {
            this.top = val
        },
        getBottom(val) {
            this.bottom = val
        }
    },
}