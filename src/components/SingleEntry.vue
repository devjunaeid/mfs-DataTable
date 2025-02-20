<script setup>
import { ref } from "vue";
import ViewIcon from "../assets/ViewIcon.vue";
import store from "../store/collectionStore";
const props = defineProps({
    collector_id: {
        type: String,
    },
    entry: {
        type: Object,
    },
});

const confirmed = ref(props.entry.confirm);

function toggleConfirmed() {
    if (confirmed.value === true) {
        store.denySingle(props.entry.sl_no, props.collector_id);
    } else {
        store.confirmSingle(props.entry.sl_no, props.collector_id);
    }
}
</script>

<template>
    <td
        class="sticky left-0 min-w-[2rem] bg-white text-center border border-green-300"
    >
        {{ entry.sl_no }}
    </td>
    <td
        class="sticky left-[2rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.member_name }}
    </td>
    <td
        class="sticky left-[10rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.member_id }}
    </td>
    <td
        class="sticky left-[18rem] min-w-[5rem] bg-white border border-green-300"
    >
        {{ entry.dwm_passed }}
    </td>
    <td
        class="sticky left-[23rem] min-w-[5rem] bg-white border border-green-300 text-center"
    >
        <input
            type="checkbox"
            :checked="entry.confirm"
            v-model="confirmed"
            @click="toggleConfirmed(entry.sl_no, collector_id)"
        />
    </td>
    <td
        class="sticky left-[28rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.account_no }}
    </td>
    <td
        class="sticky left-[36rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.loan_amount }}
    </td>
    <td
        class="sticky left-[44rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.gs_amount }}
    </td>
    <td
        class="sticky left-[52rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.vs_amount }}
    </td>
    <td
        class="sticky left-[60rem] min-w-[8rem] bg-white border border-green-300"
    >
        {{ entry.emds_amount }}
    </td>
    <td class="border border-green-300">
        {{ entry.loan_collection_split_total }}
    </td>
    <td class="border border-green-300">
        {{ entry.loan_collection_split_pa }}
    </td>
    <td class="border border-green-300">
        {{ entry.loan_collection_split_sc }}
    </td>
    <td class="border border-green-300">{{ entry.loan_recoverable_total }}</td>
    <td class="border border-green-300">{{ entry.loan_recoverable_pa }}</td>
    <td class="border border-green-300">{{ entry.loan_recoverable_sc }}</td>
    <td class="border border-green-300">{{ entry.loan_due_adv_new_due }}</td>
    <td class="border border-green-300">
        {{ entry.loan_due_adv_closing_due }}
    </td>
    <td class="border border-green-300">{{ entry.loan_balance_total }}</td>
    <td class="border border-green-300">{{ entry.loan_balance_pa }}</td>
    <td class="border border-green-300">{{ entry.loan_balance_sc }}</td>
    <td class="border border-green-300">{{ entry.disbursed_amount }}</td>
    <td class="border border-green-300">{{ entry.disburse_date }}</td>
    <td class="border border-green-300">{{ entry.gs_balance }}</td>
    <td class="border border-green-300">{{ entry.vs_balance }}</td>
    <td class="border border-green-300">{{ entry.dps_balance }}</td>
    <td class="border border-green-300">{{ entry.guardian_name }}</td>
    <td
        class="sticky right-0 min-w-[8rem] bg-zinc-100 text-center shadow-lg border border-green-300"
    >
        <button
            class="w-full h-full flex justify-center items-center cursor-pointer"
        >
            <ViewIcon />
        </button>
    </td>
</template>
