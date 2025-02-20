<script setup>
import GithubIcon from "../assets/GithubIcon.vue";
</script>

<template>
    <div
        class="w-screen h-screen flex flex-col justify-center items-center gap-5"
    >
        <h1 class="text-2xl">
            This project demonestrade a
            <span class="text-4xl font-semibold text-green-500">DataTable</span>
            for a MFS.
        </h1>
        <div>
            <RouterLink
                class="text-2xl px-4 py-2 bg-green-500 text-white"
                to="/datatable"
            >
                View the DataTable
            </RouterLink>
            <p
                class="flex justify-center items-center gap-1 mt-2 text-sm text-zinc-500 italic"
            >
                *Optimize for 1080p,
                <a
                    href="https://github.com/devjunaeid/mfs-DataTable"
                    class="flex justify-center items-center gap-1 hover:text-blue-600"
                    >view source code on <GithubIcon class="size-4" />
                </a>
            </p>
        </div>
    </div>
</template>
