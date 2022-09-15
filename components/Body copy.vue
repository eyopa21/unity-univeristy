<template>
    <nav
        class="scroll-smooth top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a class="text-sm lg:-ml-16 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#">Unity University</a>
                <button @click="showNav = !showNav"
                    class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button">
                    <MenuIcon v-if="showNav==false" class="w-8 h-8 text-white" />
                    <XIcon v-if="showNav == true" class="w-8 h-8 text-white" />
                </button>
            </div>
            <div :class="showNav ? 'block':'hidden'"
                class="ml-16 lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
                id="example-collapse-navbar">
                <ul class="flex flex-col lg:flex-row list-none mr-auto">
                    <li class="flex items-center">
                        <a class="lg:text-white  lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#services">
                            <HomeIcon class="w-5 h-5 mr-1" />
                            Home
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <HomeIcon class="w-5 h-5 mr-1" />
                            Materials
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <HomeIcon class="w-5 h-5 mr-1" />
                            About Us
                        </a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <HomeIcon class="w-5 h-5 mr-1" />
                            Contact
                        </a>
                    </li>
                </ul>
                <ul class="hidden lg:flex flex-col lg:flex-row list-none lg:ml-auto ">
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <img class="w-6 h-6" src="../assets/svg/whatsapp.svg" alt="" /><span
                                class="lg:hidden inline-block ml-2">Share</span></a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <img class="w-6 h-6" src="../assets/svg/telegram.svg" alt="" />
                            <span class="lg:hidden inline-block ml-2">Tweet</span></a>
                    </li>
                    <li class="flex items-center">
                        <a class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#">
                            <img class="w-6 h-6" src="../assets/svg/twitter.svg" alt="" /><span
                                class="lg:hidden inline-block ml-2">Star</span></a>
                    </li>
                    <li class="flex items-center">
                        <button
                            class="bg-white flex flex-row text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                            type="button" style="transition: all 0.15s ease 0s">
                            <PhoneIcon class="h-4 w-4 mr-2" /> Contact Us
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    <main>
        <section id="hero">
            
            <BodyHero />
        </section>
        <section id="services">

            <BodyServices />
        </section>
        <BodyAdv />
        <BodyTeams />
        <BodyServices2 />
        <BodyContact />
    </main>
</template>
<script setup>
import { AdjustmentsIcon } from '@heroicons/vue/solid';

</script>