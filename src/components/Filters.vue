<template>
  <div class="">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        ref="button"
        :class="open ? '' : 'text-opacity-90'"
        class="inline-flex items-center px-3 py-2 text-base text-white font-medium bg-green-700 rounded-md group hover:text-opacity-100"
      >
        <span>Filters</span>
        <ChevronDownIcon
          :class="open ? '' : 'text-opacity-70'"
          class="w-5 h-5 ml-2 text-white transition duration-150 ease-in-out group-hover:text-opacity-80"
          aria-hidden="true"
        />
      </PopoverButton>  

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <PopoverPanel
          class="absolute z-10 right-0 w-72 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
            <RadioGroup v-model="selecteds[idx]" v-for="(filterGroup, idx) in filters" :key="filterGroup.filterKey">
              <RadioGroupLabel class="text-lg px-4">{{filterGroup.displayName}}</RadioGroupLabel>
              <RadioGroupOption
                as="template"
                :value="filterGroup.filterKey + '::' + option.name"
                v-slot="{active, checked}"
                v-for="(option, optionIdx) in filterGroup.options"
                :key="optionIdx">
                    <div
                        :class="[
                            active
                            ? 'bg-gray-200'
                            : '',
                            checked ? 'bg-sky-900 bg-opacity-75 ' : 'bg-white ',
                        ]"
                        class="relative flex px-6 py-4 cursor-pointer focus:outline-none divide-y-2 divide-green-500"
                    >
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center">
                                <div class="text-sm">
                                    <RadioGroupLabel
                                        as="p"
                                        :class="checked ? 'text-gray-500' : 'text-gray-900'"
                                        class="font-medium"
                                    >
                                    {{option.name}} ({{option.count}})
                                    </RadioGroupLabel>
                                </div>
                            </div>
                            <div v-show="checked" class="flex-shrink-0 text-black">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="#000" fill-opacity="0.2" />
                                    <path d="M7 13l3 3 7-7" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </RadioGroupOption>
            </RadioGroup>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script>
import { 
    Popover, 
    PopoverButton, 
    PopoverPanel, 
    RadioGroup, 
    RadioGroupLabel, 
    RadioGroupDescription, 
    RadioGroupOption 
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
    ChevronDownIcon,
  },
  props: {
    filters: {
        type: Array,
        required: true
    }
  },
  data () {
      return {
        selecteds: []
      }
  },
  created() {
      this.$watch('selecteds', (newVal) => {
          this.$emit('update-filter', newVal)
      }, {
          deep: true,
          immediate: true
      })
  },
  updated() {
    for(let i=0, l=this.filters.length; i<l; i++) {
        // this is really relying on the fact we won't have a key or option with "::" in it
        this.selecteds[i] = this.filters[i].filterKey + '::' + this.filters[i].options[0].name
    }
  }
}
</script>
