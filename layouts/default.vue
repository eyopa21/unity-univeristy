<template>
    <div>
        <Nav />
        <div>

            <slot />

        </div>
        <div :class="$route.fullPath == '/'? 'hidden':'block'" class="lg:pb-8">
            <Footer />
        </div>

    </div>
</template>