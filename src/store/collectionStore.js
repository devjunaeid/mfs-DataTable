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
  allChecked() {
    for (let i = 0; i < this.collection_data.length; i++) {
      if (this.collection_data[i].all_confirmed === false) {
        return false;
      }
    }
  },
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
