<template>
    <div class="">
        <div class="rounded-sm h-44 bg-cover relative" :style="{backgroundImage:`url(${imageURL})`}">
            <div 
                v-bind:class="tasteProfileClass"
                class="py-2 px-4 mt-2 mr-2 rounded-md bg-opacity-70 text-white text-xs w-max absolute right-0">
                {{profile}}
            </div>
        </div>
        <div class="flex px-4 py-2">
            <div class="flex-grow text-md sm:text-lg font-bold">{{name}}</div>
            <div class="flex-none">
                <AddToCartButton v-bind:url="url" v-bind:buttonText="angelPriceUSD" />
                <!-- <span>{{displayPriceUSD}}</span> -->
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import AddToCartButton from '@/components/AddToCartButton.vue'

export default defineComponent({
    name: 'WineCard',
    components: { AddToCartButton },
    props: {
        id: Number,
        name: String,
        url: String,
        displayPriceUSD: String,
        angelPriceUSD: String,
        imageURL: String,
        profile: String,
    },
    computed: {
        tasteProfileClass: function () {
            // These should probably be in constants
            let bgcss = {}
            switch(this.profile) {
                case 'Crisp White':
                    bgcss = {
                        'bg-purple-900': true
                    }
                    break
                case 'Rose':
                    bgcss = {
                        'bg-pink-300': true
                    }
                    break
                case 'Smooth Red':
                    bgcss = {
                        'bg-red-500': true
                    }
                    break
                case 'Big Red':
                    bgcss = {
                        'bg-pink-800': true
                    }
                    break
                case 'Fruity White':
                    bgcss = {
                        'bg-green-600': true
                    }
                    break
                case 'Rich White':
                    bgcss = {
                        'bg-yellow-300': true
                    }
                    break
                default: break
            }
            return bgcss
        }
    }
})
</script>