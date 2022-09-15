<template>

  <section class="bg-white  lg:rounded-2xl dark:bg-[#111111]">
    <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="py-12">
        <h2 class="after-effect after:left-48 mt-12 lg:mt-0 text-white">Portfolio</h2>

        <!-- fillter group buttons -->
        <ul
          class="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
          <li class="fillter-btn mr-4 md:mx-4 hover:underline">All</li>
          <li class="fillter-btn mr-4 md:mx-4 hover:underline">Mobile Apps</li>
          <li class="fillter-btn mr-4 md:mx-4 hover:underline"> Web Apps</li>
          <li class="fillter-btn mr-4 md:mx-4 hover:underline"> Designs</li>
          <li class="fillter-btn mr-4 md:mx-4 hover:underline">Games</li>
        </ul>
      </div>
      <!-- End py-12 -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mymix portfolio_list-two  three-col ">

        <!-- portfolio items one start -->
        <div @click="layout.project = project" v-for="project in projects" :key="project" class="w-full pb-4">
          <div class="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
            <div class="overflow-hidden rounded-lg">
              <a>
                <img
                  class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                  :src="project.image" alt="portfolio image" />
              </a>
            </div>
            <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">{{project.subtitle}}</span>
            <h2
              class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
              <a _target="blank" :href="project.link">{{project.title}} </a>
            </h2>
          </div>
        </div>

        <div v-if="layout.project" class=" fixed h-screen w-screen inset-0 bg-gray-800 opacity-70 z-0"></div>
        <ProjectModal v-if="layout.project " class="fixed top-64 z-auto" />

      </div>

    </div>

  </section>

</template>

<script setup>
  const layout = useLayout();
  const projects = ref([{
      title: 'GBI App',
      subtitle: 'Social media application for University students',
      description: 'Gbi app is one of my projects aimed specifically for university student for chatting with thier beloved ones, and to get thier future wives!! This application works for all cross platforms as well',
      link: 'https://gbi-date.web.app',
      image: 'https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fgbi-date.png?alt=media&token=37accb22-ef8b-4f4f-a7d5-0f5be031d8c2',
      date: 'date'
    }, {
      title: 'My instagram',
      subtitle: 'Social media application for University students',
      description: 'This is my other project which is The clone version of Instagram. I have been working on this when I started programming it does not have that much functionality, but I think it is worth doing for exprerience purposes',
      link: 'https://my-instagram-dd374.web.app',
      image: 'https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fmy-insta.png?alt=media&token=996d7046-1dfa-4856-9a45-d4393865bf54',
      date: 'date'
    },
    {
      title: 'Gbi journal',
      subtitle: 'Journal publishing application for universities',
      description: 'I think this project is really problem solving for our community, it can be customized to be digital library or online book store, but I planned it to be for collages to make them publish thier graduates journal paper.',
      link: 'https://gbi-journal.web.app',
      image: 'https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fgbi-journal.png?alt=media&token=0bd1bcaf-a414-40ed-a075-debd04f4b557',
      date: 'date'
    },
    {
      title: 'Minab food recipe',
      subtitle: 'Food recipe application',
      description: 'Food recipe application, made as an assignment for MINAB tech company assignment',
      link: 'https://minab-food-recipe.web.app',
      image: 'https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fminab-food.png?alt=media&token=dbadf4c8-f412-45bf-97de-b64ace83bf8f',
      date: 'date'
    }
  ])
</script>