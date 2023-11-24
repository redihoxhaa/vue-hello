const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            photo: 'https://picsum.photos/id/237/200/300',
            photo_alt: 'cane'
        }
    }
}).mount('#app')