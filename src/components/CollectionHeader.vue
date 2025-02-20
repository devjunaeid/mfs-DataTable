<!-- Static -->
<template>
    <!-- Collection Filter/Selection Header -->
    <div
        class="w-full p-5 rounded-md flex flex-wrap justify-evenly items-center bg-green-600 text-white"
    >
        <div class="flex justify-center items-center gap-2">
            <label for="collection_date">Collection Date:</label>
            <input class="bg-zinc-100 p-1 rounded-md text-black" type="date" />
        </div>
        <div class="flex justify-center items-center gap-2">
            <label for="branch">Branch:</label>
            <select class="bg-zinc-100 p-1 rounded-md text-black" name="fo">
                <option selected value="">Select Branch</option>
                <option value="gazipur">Gazipur</option>
                <option value="badda">Badda</option>
                <option value="uttra">Uttra</option>
            </select>
        </div>
        <div class="flex justify-center items-center gap-2">
            <label for="fo">Field Officer:</label>
            <select class="bg-zinc-100 p-1 rounded-md text-black" name="fo">
                <option selected value="">Select FO</option>
                <option value="maruf">Maruf</option>
                <option value="jamal">Jamal</option>
                <option value="henna">Henna</option>
            </select>
        </div>
        <div class="flex justify-center items-center gap-2">
            <label for="collection_type">Collection Type:</label>
            <select
                class="bg-zinc-100 p-1 rounded-md text-black"
                name="collection_type"
            >
                <option selected value="">Type</option>
                <option value="OP">OP</option>
                <option value="AB">AB</option>
                <option value="DC">DC</option>
            </select>
        </div>
        <div class="flex justify-center items-center gap-2">
            <label for="samity">Samity:</label>
            <select class="bg-zinc-100 p-1 rounded-md text-black" name="samity">
                <option selected value="">Select a Samity</option>
                <option value="Samity A">Samity A</option>
                <option value="Samity B">Samity B</option>
                <option value="Samity C">Samity C</option>
                <option value="Samity D">Samity D</option>
            </select>
        </div>
        <button class="bg-zinc-100 p-1 rounded-md text-black">Show</button>
    </div>
</template>
