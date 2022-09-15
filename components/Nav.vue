<template>
    <header class="bg-black flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
        <div
            class="flex justify-between w-full px-4 lg:px-0  lg:bg-transparent  bg-black">
            <div class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                <!-- website logo -->
                <a class="text-5xl font-semibold" href="index.html">
                   
                <div class="h-[26px] lg:h-[32px] text-white uppercase text-4xl ml-2 tracking-wider font-logo">eyoba</div>
                </a>
                <div class="flex items-center">
                    <!-- light and dark mode button -->
                    <!--button id="theme-toggle-mobile" type="button"
                        class="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                        <MoonIcon class="w-5 h-5" />

                    </button-->
                    <!-- mobile toggle button -->
                    <button @click="showNav = !showNav" id="menu-toggle" type="button" class="menu-toggle-btn">
                        <MenuIcon v-if="showNav == false" class="w-5 h-5" />
                        <XIcon v-else class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- header items two for large screens -->
        <nav class="hidden lg:block ">
            <ul class="flex my-12">
                <li>
                    <NuxtLink to="/" class="menu-item-two " :class="$route.fullPath=='/' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                           <HomeIcon class="w-4 h-4 mb-[2px]"/>
                        </span> Home </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="menu-item-two" :class="$route.fullPath=='/about' ? 'menu-item-two-active':'menu-item-two'" >
                        <span class="mr-2 text-base">
                            <HomeIcon class="w-4 h-4 mb-[2px]"/>
                        </span> About </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/resume" class="menu-item-two" :class="$route.fullPath=='/resume' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <IdentificationIcon class="w-4 h-4 mb-[2px]"/>
                        </span> Resume </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="projects" class="menu-item-two" :class="$route.fullPath=='/projects' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <BriefcaseIcon class="w-4 h-4 mb-[2px]"/>
                        </span> Works </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="blogs" class="menu-item-two" :class="$route.fullPath=='/blogs' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <NewspaperIcon class="w-4 h-4 mb-[2px]"/>
                           
                        </span> Blogs </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="menu-item-two" :class="$route.fullPath=='/contact' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <PhoneIcon class="w-4 h-4 mb-[2px]"/>
                        </span> Contact </NuxtLink>
                </li>
                <li>
                    <!-- light and dark mode button -->
                    <!--button @click="test" id="theme-toggle" type="button" class="dark-light-btn w-[44px] h-[44px] ml-2">

                        <MoonIcon class="w-5 h-5" />
                    </button-->

                </li>
            </ul>
        </nav>

        <!-- mobile menu start -->
        <nav @click="showNav=false" id="navbar" :class="showNav? 'block lg:hidden':'hidden lg:hidden'">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li>
                    <NuxtLink class="mobile-menu-items" to="/" :class="$route.fullPath=='/' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <HomeIcon class="w-4 h-4"/>
                        </span> Home </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/about"  :class="$route.fullPath=='/about' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <UserIcon class="w-4 h-4"/>
                        </span> About </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/resume"  :class="$route.fullPath=='/resume' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <IdentificationIcon class="w-4 h-4"/>
                        </span> Resume </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/projects"  :class="$route.fullPath=='/projects' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <BriefcaseIcon class="w-4 h-4"/>
                        </span> Works </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/blogs"  :class="$route.fullPath=='/blogs' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <NewspaperIcon class="w-4 h-4"/>
                        </span> Blogs </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/contact"  :class="$route.fullPath=='/contact' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <PhoneIcon class="w-4 h-4"/>
                        </span> Contact </NuxtLink>
                </li>
            </ul>
        </nav>
        <!-- mobile menu end -->
        {{getTheme}}
    </header>
</template>
<script setup>
import { MoonIcon, MenuIcon, XIcon, HomeIcon, UserIcon ,NewspaperIcon, BriefcaseIcon, IdentificationIcon, PhoneIcon } from "@heroicons/vue/solid";

const showNav = ref(false)

const test = () => {
    if(process.client){

        localStorage.setItem("color-themes", "dark")
    }
}


const lightMode = () => {
    if(process.client){

localStorage.clear();
}
}


const getTheme = computed(() => {
    if(process.client){

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
   document.documentElement.classList.add("dark");
 } else {
     document.documentElement.classList.remove("dark");
 }
}
})

  

</script>

