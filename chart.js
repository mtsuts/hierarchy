function packedCircles(data, params) {
  const container = d3.select(params.container);
  const width = container.node().getBoundingClientRect().width;
  const height = container.node().getBoundingClientRect().height;

  // append svg to container

  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // pack layout and root

  const packLayout = d3.pack().size([300, 300]);

  const root = d3.hierarchy(data);
  root.sum(function (d) {
    return d.value;
  });

  packLayout(root);

  console.log(root.descendants());

  // nodes

  const g = svg
    .append("g")
    .selectAll("g")
    .data(root.descendants())
    .join("g")
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")";
    });

  const nodes = g.append("circle").attr("r", (d) => d.r);

  // texts

  g.append("text")
    .attr("dy", 4)
    .text((d) => (d.children === undefined ? d.data.name : ""));

  nodes.each(function (d) {
    tippy(this, {
      content: d.data.name,
      arrow: false
    });
  });
}
