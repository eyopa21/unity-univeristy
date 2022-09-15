<template>
  <!-- modal start for item one  -->
  <div  class="modal-container modal flex flex-row mx-8 px-8">
    <div class="relative">
        <div @click="layout.project=''" class="h-12 w-12  text-white z-20 absolute flex -m-8 md:-m-12 bg-red-600"><XIcon class="w-12 h-12 hover:scale-105"/> </div>

    <div
      class="mt-4 md:mt-0 dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]">
      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-5xl text-left font-bold">
        {{layout.project.title}}
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
        <div class="space-y-2">
          <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
            <NewspaperIcon class="w-6 h-6 mr-1"/>
            Project :&nbsp;
            <span class="font-medium"> {{layout.project.title}}</span>
          </p>
          <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
            <CodeIcon class="w-6 h-6 mr-1"/>
            Languages :&nbsp;
            <span class="font-medium">Vue js, Nods js</span>
          </p>
        </div>

        <div class="space-y-2">
          <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
            <UserIcon class="w-6 h-6 mr-1"/>
            Client :&nbsp; <span class="font-medium">Bahirdar Uv</span>
          </p>
          <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
            <EyeIcon class="w-6 h-6 mr-1"/>
            Preview :&nbsp;
            <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
              <a target="_blank" :href="layout.project.link">{{layout.project.link}}</a>
            </span>
          </p>
        </div>
      </div>

      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
        {{layout.project.description}}
      </p>
      <div class="pr-3">
        <img class="w-full md:h-[450px] h-auto object-contain rounded-xl mt-6"
          :src="layout.project.image" alt="portfolio image" />
      </div>
    </div>
   
    <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
    
  </div>
</div>
</template>

<script setup>
    import { CodeIcon, NewspaperIcon, UserIcon, EyeIcon, XIcon  } from '@heroicons/vue/solid';
    

    const layout = useLayout();
    </script>