<template>
    <div >
        <div class="bg-black min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
            <div class="z-50">
                <!-- container start -->
                <div class="container">
                    
    
                    <!-- about page contant start -->
                    <div>
                        <div class="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                            <div data-aos="fade" class="aos-init aos-animate">
                                <div class="py-12">
                                    <!-- about page title -->
                                    <h2 class="after-effect after:left-52 mt-12 lg:mt-0 text-white"> About Me </h2>
                                    <div class="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                                        <div class="col-span-12 md:col-span-4">
                                            <!-- about me image -->
                                            <img class="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                                src="https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Feyobaaaaaaaaa.jpg?alt=media&token=fcd6b46e-51ab-434f-97dd-70ae19761d06" alt="about image" />
                                        </div>
                                        <div class="col-span-12 md:col-span-8 space-y-2.5 text-gray-400 ">
                                            <!-- who am i content  -->
                                            <div class="md:mr-12 xl:mr-16">
                                                <h3 class="text-4xl font-medium dark:text-white mb-2.5"> Who am i? </h3>
                                                <p class=" text-gray-400 leading-7"> My name is Eyob Nigussie Chekol, I prefer to express myself as a self learned Full stack Software Engineer. I am currently 4th year Software engineering and 3rd year Management Science student at Bahiradar Univeristy!! I have a passion for developing innovative programs that solves real world problems.  </p>
                                                <p class="ttext-gray-400  leading-7 mt-2.5"> I see myself as an adaptable, fast learner, curious and committed developer. And I believe that consistency breeds success. I consider myself as a humble, experienced and disciplined developer who works based on plan. </p>
                                            </div>
    
                                            <!-- personal info -->
                                            <div>
                                                <h3 class="text-4xl font-medium my-5 dark:text-white"> Personal Info </h3>
                                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div class="flex">
                                                        <span
                                                            class="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                            <DeviceMobileIcon class="h-6 w-6"/>
                                                        </span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910"> Phone
                                                            </p>
                                                            <a href="tel:+251918784596" class="font-medium hover:underline dark:text-white"> +251918784596</a>
                                                        </div>
                                                    </div>
    
                                                    <div class="flex">
                                                        <span
                                                            class="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                            <LocationMarkerIcon class="h-6 w-6"/>
                                                        </span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910"> Location
                                                            </p>
                                                            <h6 class="font-medium dark:text-white"> AddisAbaba, Ethiopia </h6>
                                                        </div>
                                                    </div>
    
                                                    <div class="flex">
                                                        <span
                                                            class="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                            <MailIcon class="w-6 h-6"/>
                                                        </span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910"> Email
                                                            </p>
                                                            <a href="mailto:jobtennis21@gmail.com" class="font-medium hover:underline dark:text-white"> jobtennis21@gmail.com </a>
                                                        </div>
                                                    </div>
    
                                                    <div class="flex">
                                                        <span
                                                            class="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                                            <CalendarIcon class="w-6 h-6"/>
                                                        </span>
                                                        <div class="space-y-1">
                                                            <p class="text-xs text-gray-lite dark:text-color-910"> Birthday
                                                            </p>
                                                            <h6 class="font-medium dark:text-white"> Jan 29, 1999 </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <!-- whai i do contain -->
                                <div class="pb-12">
                                    <h3 class="text-[35px] dark:text-white font-medium pb-5"> What I do! </h3>
                                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                        
                                        <div v-for="i in 6" :key="i" class="about-box dark:bg-transparent bg-[#f3faff]">
                                            <img class="w-10 h-10 object-contain block" src="../assets/img/slider/brand1.png"
                                                alt="icon" />

                                            <div class="space-y-2">
                                                <h3 class="dark:text-white text-2xl font-semibold"> Web Development </h3>
                                                <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor
                                                    sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <!-- what i do contain end -->
                                <!--div class="">
                                    <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                                        <h3 class="text-center dark:text-white text-6xl mb-3 font-semibold">Clients</h3>
                                       
                                        <div class="slickTwo flex flex-row space-x-2 px-2 pt-8">
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand1.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand2.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand3.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand4.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand1.png"
                                                    alt="brand" />
                                            </div>
                                            <div>
                                                <img class="overflow-hidden brand-img" src="../assets/img/slider/brand1.png"
                                                    alt="brand" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div-->
    
                                
                            </div>
                        </div>
                    </div>
                    <!-- about section end  -->
                </div>
            </div>
        </div>
    
    </div>
</template>

<script setup>
import { PhoneIcon, DeviceMobileIcon, LocationMarkerIcon, CalendarIcon,MailIcon  } from '@heroicons/vue/solid';

</script>