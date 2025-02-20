<script setup>
import store from "../store/collectionStore";
import { ref } from "vue";
import GroupEntry from "../components/GroupEntry.vue";
import CollectionHeader from "../components/CollectionHeader.vue";

const allChecked = ref(store.status());

// Toggle Status for all entry.
const toggleStatus = () => {
    if (allChecked.value) {
        store.denyAll();
    } else {
        store.confimAll();
    }
};
</script>

<template>
    <div class="p-10 space-y-4 flex flex-col justify-center items-center">
        <CollectionHeader />

        <!-- Collection DataTable. -->
        <div class="overflow-x-auto max-w-full">
            <table
                class="min-w-full border-separate border-green-300 border-spacing-0"
            >
                <thead
                    class="bg-green-700 text-white font-semibold text-center"
                >
                    <tr>
                        <th
                            rowspan="2"
                            class="sticky left-0 min-w-[2rem] bg-green-700 border-r border-green-300 shadow-md z-50"
                        >
                            Sl. No.
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[2rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            Member Name
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[10rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            Member ID
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[18rem] min-w-[5rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            D/W/M Passed
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[23rem] min-w-[5rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            <div
                                class="flex flex-col justify-center items-center"
                            >
                                <span>Confirm</span>
                                <div
                                    class="w-full h-[1px] my-1 bg-green-300"
                                ></div>
                                <input
                                    type="checkbox"
                                    :checked="allChecked"
                                    v-model="allChecked"
                                    @click="toggleStatus"
                                />
                            </div>
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[28rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            Account No.
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[36rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            Loan Amount
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[44rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            GS Amount
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[52rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            VS Amount
                        </th>
                        <th
                            rowspan="2"
                            class="sticky left-[60rem] min-w-[8rem] bg-green-700 border-r border-green-300 z-50"
                        >
                            EMDS Amount
                        </th>
                        <th
                            colspan="3"
                            class="border border-green-300 min-w-80"
                        >
                            Loan Collection Split
                        </th>
                        <th
                            colspan="3"
                            class="border border-green-300 min-w-80"
                        >
                            Loan Recoverable
                        </th>
                        <th
                            colspan="2"
                            class="border border-green-300 min-w-56"
                        >
                            Loan Deu/-Adv (PA+SC)
                        </th>
                        <th
                            colspan="3"
                            class="border border-green-300 min-w-80"
                        >
                            Loan Balance
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-32"
                        >
                            Disburse Date
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-32"
                        >
                            Disbursed Amount
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-32"
                        >
                            GS Balance
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-32"
                        >
                            VS Balance
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-32"
                        >
                            DPS Balance
                        </th>
                        <th
                            rowspan="2"
                            class="border border-green-300 min-w-56"
                        >
                            Guardian Name
                        </th>
                        <th
                            rowspan="2"
                            class="sticky right-0 w-[20px] bg-green-700 border border-green-300"
                        >
                            View Details
                        </th>
                    </tr>

                    <!-- Second Row for nested Headers -->
                    <tr>
                        <th class="border border-green-300">Total</th>
                        <th class="border border-green-300">PA</th>
                        <th class="border border-green-300">SC</th>
                        <th class="border border-green-300">Total</th>
                        <th class="border border-green-300">PA</th>
                        <th class="border border-green-300">SC</th>
                        <th class="border border-green-300">New Due</th>
                        <th class="border border-green-300">Closing Due</th>
                        <th class="border border-green-300">Total</th>
                        <th class="border border-green-300">PA</th>
                        <th class="border border-green-300">SC</th>
                    </tr>
                </thead>
                <tbody class="text-right">
                    <!-- Table rows for each group Entry -->
                    <template v-for="item in store.collection_data">
                        <GroupEntry :group_collection="item" />
                    </template>
                </tbody>
            </table>
        </div>
        <RouterLink class="text-xl px-4 py-2 bg-green-500 text-white" to="/">
            Back to Home
        </RouterLink>
    </div>
</template>
