<template>
    <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center text-center mb-24">
                <div class="w-full lg:w-6/12 px-4">
                    <h2 class="text-4xl font-semibold">Here are our heroes</h2>
                    <p class="text-lg leading-relaxed m-4 text-gray-600"> According to the National Oceanic and
                        Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record
                        maximum. </p>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div v-for="i in 4" :key="i" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div class="px-6"> <img alt="..." src="../assets/img/person.jpg"
                            class="shadow-lg rounded-full max-w-full mx-auto" style="max-width: 120px;" />
                        <div class="pt-6 text-center">
                            <h5 class="text-xl font-bold">Ryan Tompson</h5>
                            <p class="mt-1 text-sm text-gray-500 uppercase font-semibold"> Web Developer </p>
                            <div class="mt-6"> <button
                                    class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"> <img class="w-full h-full" src="../assets/svg/twitter.svg"
                                        alt=""></button><button
                                    class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"> <img class="w-full h-full" src="../assets/svg/whatsapp.svg"
                                        alt=""></button><button
                                    class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                    type="button"> <img class="w-full h-full" src="../assets/svg/telegram.svg"
                                        alt=""> </button> </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>