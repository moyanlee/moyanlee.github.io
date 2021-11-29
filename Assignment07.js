function buttonclick(a) {

    var abc = [
        [600, 150, 150, 150, 150, 150],
        [150, 600, 150, 150, 150, 150],
        [150, 150, 600, 150, 150, 150],
        [150, 150, 150, 600, 150, 150],
        [150, 150, 150, 150, 600, 150],
        [150, 150, 150, 150, 150, 600]
    ];

    d3.select("body")
        .selectAll("img")
        .data(abc[a])
        .style("width", function(d) { return d + "px"; });
}