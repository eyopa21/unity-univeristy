<template>

    <div class="flex pb-8 bg-[#111111] flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
        data-aos="fade">

        <img class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] object-fill"
            src="https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Feyobaaaaaaaaa.jpg?alt=media&token=fcd6b46e-51ab-434f-97dd-70ae19761d06" alt="about avatar" />
        <h3 class="mt-6 mb-1 text-5xl font-semibold dark:text-white"> Eyob Nigussie</h3>
        <p class="mb-4 text-[#7B7B7B]">Software Engineer</p>

        <div class="flex space-x-3">

            <a v-for="i in 4" :key="i" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn text-[#1773EA]">
                    <img src="https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fgbi-journal.png?alt=media&token=0bd1bcaf-a414-40ed-a075-debd04f4b557" alt="" >
                </span>
            </a>


        </div>

        <button class="dowanload-btn">
            <PhoneIcon class="w-5 h-5 mr-2" /> Contact Me
        </button>
    </div>
</template>

<script setup>
    import { PhoneIcon } from '@heroicons/vue/solid';
    
</script>