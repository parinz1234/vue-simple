const profile = {
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data() {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg",
    };
  },
};

Vue.component("profile", profile);

new Vue({
  template: "<profile />",
  el: "#app",
});
