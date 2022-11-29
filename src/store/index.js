import { reactive } from 'vue'

export const store = reactive({
    modalActive: false,
    changeStateModal() {
        this.modalActive = !this.modalActive
    }
})