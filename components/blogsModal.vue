<template>
    
    <div id="ex1" class="modal-container modal">
        <div class="relative">

            <div @click="layout.blogs=''" class="h-12 w-12  text-white z-20 absolute flex -m-8 md:-m-12 bg-red-600"><XIcon class="w-12 h-12 hover:scale-105"/> </div>

        <div class="dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]">
            <div class="pr-3 pb-2">
                <img class="w-full md:h-[450px] object-cover rounded-xl mt-6" src="../assets/img/unity.jpg"
                    alt="blog image" />
                <div class="flex mt-4 text-tiny text-black dark:text-white">
                    <span>177 April</span>
                    <span class="dot-icon">Inspiration</span>
                </div>
                <h2 class="dark:text-white sm:text-3xl mt-2 font-medium"> How to Own Your Audience by Creating
                    an Email List. </h2>
                <p class="dark:text-white font-normal text-[15px] sm:text-sm my-4"> Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni
                    quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati
                    rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur
                    delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta
                    inventore dolorum consequuntur quo obcaecati rerum sit non. </p>
                <p class="dark:text-white font-normal text-[15px] sm:text-sm my-4"> Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni
                    quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati
                    rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur
                    delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit.
                    Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis
                    doloremque soluta inventore dolorum consequuntur. </p>
                <p class="dark:text-white font-normal text-[15px] sm:text-sm my-4"> Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni
                    quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo
                    obcaecati rerum sit non. </p>
            </div>

            <div class="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
                <div class="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
                    <div>
                        <img class="md:w-[125px] rounded-xl" src="../assets/img/person.jpg" alt="about image" />
                    </div>
                    <div class="pl-5">
                        <div class="flex justify-between items-center">
                            <h3 class="dark:text-white text-[22px] font-medium"> Rafia Ana </h3>
                            <span class="dark:text-[#dedede] text-tiny">15 min ago</span>
                        </div>
                        <p class="dark:text-white md:pr-16"> Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?
                        </p>
                        <button
                            class="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                            Reply </button>
                    </div>
                </div>
            </div>

            <div class="flex items-center md:justify-end space-x-4 mt-8 mr-3">
                <h6 class="dark:text-white text-[20px]">Login with:</h6>
                <div class="flex space-x-3">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <span class="socialbtn text-[#1773EA]">
                            <i class="fa-brands fa-facebook-f"></i>
                        </span>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <span class="socialbtn text-[#1C9CEA]">
                            <i class="fa-brands fa-twitter"></i>
                        </span>
                    </a>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <span class="socialbtn text-[#e14a84]">
                            <i class="fa-brands fa-dribbble"></i>
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <span class="socialbtn text-[#0072b1]">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div class="pt-3">
                <div class="pr-3 pb-4">
                    <form class="w-full">
                        <label class="block mb-2">
                            <span class="dark:text-white text-[25px] font-medium">Leave a Reply</span>
                            <textarea
                                class="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray"
                                rows="3"></textarea>
                        </label>
                        <button class="comment-btn">Comment</button>
                    </form>
                </div>
            </div>

        </div>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark ">Close</a>
        <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark ">Close</a>
    </div>
</div>
</template>


<script setup>
    import { XIcon } from '@heroicons/vue/solid';
const layout = useLayout();

</script>
