import { reactive } from "vue";
import data from "../data";
const store = reactive({
  collection_data: data,
  count: () => {
    count = 0;
    this.collection_data.forEach((item) => {
      count += item.collections.length;
    });
    return count;
  },
  // Check if all entries are checked.
  status() {
    for (let i = 0; i < this.collection_data.length; i++) {
      if (this.collection_data[i].all_confirmed === false) {
        return false;
      }
    }
  },
  // Check if all group entries are checked.
  groupChecked(collector_id) {
    this.collection_data.forEach((item) => {
      for (let i = 0; i < item.collections.length; i++) {
        if (item.collections[i].confirm === false) {
          return false;
        } else {
          return true;
        }
      }
    });
  },

  // Toggle status for all entry.
  confimAll() {
    this.collection_data.forEach((item) => {
      item.all_confirmed = true;
      item.collections.forEach((subItems) => {
        subItems.confirm = true;
      });
    });
  },
  denyAll() {
    this.collection_data.forEach((item) => {
      item.all_confirmed = false;
      item.collections.forEach((subItems) => {
        subItems.confirm = false;
      });
    });
  },

  //Toggle Status for group entry.
  confirmGroup(collector_id) {
    this.collection_data.forEach((item) => {
      if (item.collector_id === collector_id) {
        item.all_confirmed = true;
        item.collections.forEach((subItem) => {
          subItem.confirm = true;
        });
      }
    });
  },
  denyGroup(collector_id) {
    this.collection_data.forEach((item) => {
      if (item.collector_id === collector_id) {
        item.all_confirmed = false;
        item.collections.forEach((subItem) => {
          subItem.confirm = false;
        });
      }
    });
  },

  //Change single status.
  confirmSingle(sl_no, collector_id) {
    this.collection_data.forEach((item) => {
      if (item.collector_id === collector_id) {
        item.collections.forEach((subItem) => {
          if (subItem.sl_no === sl_no) {
            subItem.confirm = true;
          }
        });
      }
    });
  },
  denySingle(sl_no, collector_id) {
    this.collection_data.forEach((item) => {
      if (item.collector_id === collector_id) {
        item.collections.forEach((subItem) => {
          if (subItem.sl_no === sl_no) {
            subItem.confirm = false;
          }
        });
      }
    });
  },
});

export default store;
