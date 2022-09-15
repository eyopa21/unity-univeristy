<template>
    <div class="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div class="py-12">
                <h2 class="after-effect after:left-32 mt-12 lg:mt-0 text-white">Blogs</h2>
                <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] grid gap-x-10 gap-y-7 mb-6">

                    <!-- blog items one start -->

                    <div @click="layout.blogs='test'" v-for="i in 6" :key="i"
                        class="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                        <div class="overflow-hidden rounded-lg">
                            <a  >
                                <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                    src="../assets/img/person.jpg" alt="blog image" />
                            </a>
                        </div>
                        <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                            <span>17 April</span>
                            <span class="dot-icon">Coding</span>
                        </div>
                        <h3
                            class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                            <a  >How to Get start with Nuxt3 js and tailwind css.</a>
                        </h3>
                    </div>

                    <div v-if="layout.blogs" class=" fixed h-screen w-screen inset-0 bg-gray-800 opacity-70 z-0"></div>
                    <BlogsModal v-if="layout.blogs " class="fixed top-64 z-auto" />

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    const layout = useLayout();
</script>