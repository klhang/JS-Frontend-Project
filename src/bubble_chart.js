/* bubbleChart creation function. Returns a function that will
 * instantiate a new bubble chart given a DOM element to display
 * it in and a dataset to visualize.
 *
 * Organization and style inspired by:
 * https://github.com/vlandham/bubble_chart_v4
 *
 */
function bubbleChart() {
  var width = 1200;
  var height = 700;

  var tooltip = floatingTooltip("gates_tooltip", 240);

  var center = { x: width / 2, y: height / 2 };

  var changeCenters = {
    "Down more than 2%": { x: width / 4, y: height / 2 },
    "Normal Fluctuation": { x: width / 2, y: height / 2 },
    "Up more than 2%": { x: 3 * width / 4, y: height / 2 }
  };

  var changesTitleX = {
    "Down more than 2%": 250,
    "Normal Fluctuation": width / 2,
    "Up more than 2%": width - 250
  };

  var forceStrength = 0.03;

  var svg = null;
  var bubbles = null;
  var nodes = [];

  function charge(d) {
    return -Math.pow(d.radius, 2.0) * forceStrength;
  }

  var simulation = d3
    .forceSimulation()
    .velocityDecay(0.2)
    .force(
      "x",
      d3
        .forceX()
        .strength(forceStrength)
        .x(center.x)
    )
    .force(
      "y",
      d3
        .forceY()
        .strength(forceStrength)
        .y(center.y)
    )
    .force("charge", d3.forceManyBody().strength(charge))
    .on("tick", ticked);

  simulation.stop();

  var fillColor = d3
    .scaleOrdinal()
    .domain(["down", "flat", "up"])
    .range(["tomato", "orange", "MediumSeaGreen"]);

  function createNodes(rawData) {
    var maxAmount = d3.max(rawData, function(d) {
      return +d.total_amount;
    });

    var radiusScale = d3
      .scalePow()
      .exponent(0.5)
      .range([2, 85])
      .domain([0, maxAmount]);

    var myNodes = rawData.map(function(d) {
      return {
        id: d.id,
        radius: radiusScale(+d.total_amount),
        value: +d.total_amount,
        name: d.stock_ticker,
        org: d.sector,
        group: d.group,
        change: d.percentage,
        range: d.range,
        x: Math.random() * 900,
        y: Math.random() * 800
      };
    });

    myNodes.sort(function(a, b) {
      return b.value - a.value;
    });

    return myNodes;
  }

  var chart = function chart(selector, rawData) {
    nodes = createNodes(rawData);

    svg = d3
      .select(selector)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    bubbles = svg.selectAll(".bubble").data(nodes, function(d) {
      return d.id;
    });

    var bubblesE = bubbles
      .enter()
      .append("circle")
      .classed("bubble", true)
      .attr("r", 0)
      .attr("fill", function(d) {
        return fillColor(d.group);
      })
      .attr("stroke", function(d) {
        return d3.rgb(fillColor(d.group)).darker();
      })
      .attr("stroke-width", 2)
      .on("mouseover", showDetail)
      .on("mouseout", hideDetail);

    bubbles = bubbles.merge(bubblesE);

    bubbles
      .transition()
      .duration(2000)
      .attr("r", function(d) {
        return d.radius;
      });

    simulation.nodes(nodes);

    groupBubbles();
  };

  function ticked() {
    bubbles
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }

  function nodechangePos(d) {
    return changeCenters[d.range].x;
  }

  function groupBubbles() {
    hidechangeTitles();

    simulation.force(
      "x",
      d3
        .forceX()
        .strength(forceStrength)
        .x(center.x)
    );

    simulation.alpha(1).restart();
  }

  function splitBubbles() {
    showchangeTitles();

    simulation.force(
      "x",
      d3
        .forceX()
        .strength(forceStrength)
        .x(nodechangePos)
    );

    simulation.alpha(1).restart();
  }

  function hidechangeTitles() {
    svg.selectAll(".change").remove();
  }

  function showchangeTitles() {
    var changesData = d3.keys(changesTitleX);
    var changes = svg.selectAll(".change").data(changesData);

    changes
      .enter()
      .append("text")
      .attr("class", "change")
      .attr("x", function(d) {
        return changesTitleX[d];
      })
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d;
      });
  }

  function showDetail(d) {
    d3.select(this).attr("stroke", "black");

    var content =
      '<span class="name">Stock: </span><span class="value">' +
      d.name +
      "</span><br/>" +
      '<span class="name">Amount: </span><span class="value">$' +
      addCommas(d.value) +
      "</span><br/>" +
      '<span class="name">Percentage Change: </span><span class="value">' +
      d.change +
      "</span>";

    tooltip.showTooltip(content, d3.event);
  }

  function hideDetail(d) {
    d3.select(this).attr("stroke", d3.rgb(fillColor(d.group)).darker());

    tooltip.hideTooltip();
  }

  chart.toggleDisplay = function(displayName) {
    if (displayName === "change") {
      splitBubbles();
    } else {
      groupBubbles();
    }
  };

  return chart;
}

var myBubbleChart = bubbleChart();

function display(error, data) {
  if (error) {
    console.log(error);
  }

  myBubbleChart("#vis", data);
}

function setupButtons() {
  d3
    .select("#toolbar")
    .selectAll(".button")
    .on("click", function() {
      d3.selectAll(".button").classed("active", false);

      var button = d3.select(this);

      button.classed("active", true);

      var buttonId = button.attr("id");

      myBubbleChart.toggleDisplay(buttonId);
    });
}

function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }

  return x1 + x2;
}

d3.csv("data/test_k.csv", display);

setupButtons();
