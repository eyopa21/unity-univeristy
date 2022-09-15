
<template>
    <div class="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade" class="aos-init aos-animate">
            <div class="container px-4 sm:px-5 md:px-10 lg:px-20">
                <div class="py-12">
                    <h2 class="after-effect after:left-40 mb-[40px] mt-12 lg:mt-0 text-white">Contact</h2>
                    <div class="lg:flex gap-x-20">
                        <!-- personal contact information -->
                        <div class="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                            <div
                                class="flex flex-wrap bg-[#fcf4ff] dark:bg-transparent p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl">
                                <span class="w-8 mt-2">
                                    <PhoneIcon class="w-8 h-8 text-white"/>
                                </span>
                                <div class="space-y-2">
                                    <p class="text-xl font-semibold dark:text-white"> Phone : </p>
                                    <a href="tel:+251918784596" class="text-gray-lite text-lg dark:text-[#A6A6A6]"> +251918784596</a>
                                    <!--p class="text-gray-lite text-lg dark:text-[#A6A6A6]"> +452 666 386 </p-->
                                </div>
                            </div>

                            <div
                                class="flex flex-wrap dark:bg-transparent bg-[#eefbff] p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl">
                                <span class="w-8 mt-2">
                                    <MailIcon class="w-8 h-8 text-white"/>
                                </span>
                                <div class="space-y-2">
                                    <p class="text-xl font-semibold dark:text-white"> Email : </p>
                                    <a href="mailto:jobtennis21@gmail.com" class="text-gray-lite text-xl dark:text-[#A6A6A6]"> jobtennis21@gmail.com
                                    </a>
                                  
                                </div>
                            </div>

                            <div
                                class="flex flex-wrap dark:bg-transparent bg-[#f2f4ff] p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl">
                                <span class="w-8 mt-2">
                                    <LocationMarkerIcon class="w-8 h-8 text-white"/>
                                </span>
                                <div class="space-y-2">
                                    <p class="text-xl font-semibold dark:text-white"> Address : </p>
                                    <p class="text-gray-lite text-lg dark:text-[#A6A6A6]"> AddisAbaba, Ethiopia
                                    </p>
                                    <p class="text-gray-lite text-lg dark:text-[#A6A6A6]"> Bahirdar, Ethiopia
                                         </p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                            <div data-aos="fade"
                                class="dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate">
                                <h3 class="text-4xl">
                                    <span class="text-gray-lite dark:text-[#A6A6A6]">I'm always open to
                                        discussing Work</span>
                                    <br />
                                    <span class="font-semibold dark:text-white">design work or
                                        partnerships.</span>
                                </h3>

                                <form @submit.prevent="send()">
                                    <!-- name input -->
                                    <Input name="Name" label="Name" rule="required"/>

                                    <!-- email input  -->
                                    <Input name="Email" label="Email" rule="email"/>

                                    <!-- massage input -->
                                    <Input name="Message" label="Message" rule="required"/>

                                    <div
                                        class="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                                        <!-- submit buttons -->
                                        <input type="submit"
                                            class="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white"
                                            value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
    import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/vue/solid";
import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
const send = handleSubmit((formValues) => {
  console.log(formValues);
});

</script>