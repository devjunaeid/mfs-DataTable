<script setup>
import store from "../store/collectionStore";
import SingleEntry from "./SingleEntry.vue";
const props = defineProps({
    group_collection: {
        type: Object,
    },
});

function toggleConfirmed() {
    if (props.group_collection.all_confirmed === true) {
        store.denyGroup(props.group_collection.collector_id);
    } else {
        store.confirmGroup(props.group_collection.collector_id);
    }
}
</script>

<template>
    <tr class="bg-green-200 border border-green-500">
        <td class="bg-green-200 sticky left-0 min-w-[2rem]"></td>
        <td class="bg-green-200 sticky left-[2rem] min-w-[8rem] text-start">
            {{ group_collection.collector_name }}
        </td>
        <td class="sticky left-[10rem] min-w-[8rem] bg-green-200"></td>
        <td class="sticky left-[18rem] min-w-[5rem] bg-green-200"></td>
        <td class="sticky left-[23rem] min-w-[5rem] bg-green-200 text-center">
            <input
                type="checkbox"
                :checked="group_collection.all_confirmed"
                @click="toggleConfirmed(group_collection.collector_id)"
            />
        </td>
        <td class="sticky left-[28rem] min-w-[8rem] bg-green-200"></td>
        <td class="sticky left-[36rem] min-w-[8rem] bg-green-200"></td>
        <td class="sticky left-[44rem] min-w-[8rem] bg-green-200"></td>
        <td class="sticky left-[52rem] min-w-[8rem] bg-green-200"></td>
        <td class="sticky left-[60rem] min-w-[8rem] bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="bg-green-200"></td>
        <td class="sticky right-0 bg-green-200"></td>
    </tr>
    <tr
        v-for="item in group_collection.collections"
        class="border border-green-500"
    >
        <SingleEntry
            :entry="item"
            :collector_id="group_collection.collector_id"
        />
    </tr>
</template>
