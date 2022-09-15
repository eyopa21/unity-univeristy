<template>
    <div class="relative z-0 w-full mt-[40px] mb-8 group">
        <input :type="props.type"  :name="props.name"
            class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "  />
        <label :for="props.name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">{{props.label}}
            *</label>
            <div class="text-red-500">
                {{errorMessage}}
            </div>
            
    </div>
    
</template>
<script setup>
import{useField} from 'vee-validate'
const props = defineProps(['name', 'type', 'placeholder', 'label', 'rule'])


const { value, errorMessage } = useField(props.name, props.rule);
</script>