ProtoGraph.initDataApp = function() {
  var x = new ProtoGraph.Card.toMaps(),
    streams = ProtoGraph.streams,
    page = ProtoGraph.page;

  x.init({
    selector: document.querySelector("#card-list-div"),
    dataURL: "https://cdn.protograph.pykih.com/dfd8a041d1daa9be3f0a/data.json",
    topoURL: "./india-topo.json",
    chartOptions: {
      height: 700,
      defaultCircleColor: ProtoGraph.site["house_colour"],
    },
    filterConfigurationJSON: {
      colors: {
        house_color: ProtoGraph.site["house_colour"],
        text_color: "#343434",
        active_text_color: ProtoGraph.site["house_colour"],
        filter_summary_text_color: ProtoGraph.site["reverse_font_colour"],
      },
      selected_heading: "FILTERS",
      reset_filter_text: "Reset",
    },
    filters: [
      {
        alias: "Active on Twitter",
        propName: "active",
      },
      {
        alias: "Tweeted about caste discrimination?",
        propName: "caste_boolean",
      },
      {
        alias: "Tweeted about women's rights?",
        propName: "womens_boolean",
      },
      {
        alias: "Tweeted about religious intolerance?",
        propName: "religious_boolean",
      },
      {
        alias: "Tweeted about LGBTQI rights?",
        propName: "lgbtqi_boolean",
      },
      {
        alias: "Tweeted about FoE?",
        propName: "foe_boolean",
      },
      {
        alias: "Tweeted about farm crisis?",
        propName: "farm_boolean",
      },
      {
        alias: "Tweeted about workers' rights?",
        propName: "workers_boolean",
      },
    ],
    defaultFilters: [
      {
        alias: "Active on Twitter",
        propName: "active",
        value: "Yes"
      }
    ]
  });
  x.renderLaptop();
};
