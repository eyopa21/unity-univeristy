<template>
  <div>
   
      <div class="bg-black">
        <NuxtLayout name="default">
          <NuxtPage  />
        </NuxtLayout>
      </div>
             
  </div>


<!--Modal v-if="layout.showModal" class="fixed top-64"/-->

  <Head >
  </Head>
</template>

<script setup>

  const layout = useLayout();

</script>