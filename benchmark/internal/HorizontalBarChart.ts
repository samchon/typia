import * as d3 from "d3";

import { ArrayUtil } from "typia/lib/utils/ArrayUtil";

import { BenchmarkStream } from "./BenhmarkStream";

const JSDOM = require("jsdom").JSDOM;

export namespace HorizontalBarChart {
    export interface IMeasure {
        label: string;
        result: Record<string, number>;
    }

    export const generate =
        (env: BenchmarkStream["environments"]) =>
        (title: string) =>
        (columns: string[]) =>
        (data: IMeasure[]) => {
            //----
            // PREPARE ASSETS
            //----
            // ENVIRONMENTS
            const environments: string[] = [
                `CPU: ${env.cpu}`,
                `OS: ${env.os}`,
                `RAM: ${Math.round(
                    env.memory / 1024 / 1024 / 1024,
                ).toLocaleString()} GB`,
                `NodeJS version: ${env.node}`,
                `Typia version: v${env.typia}`,
            ];

            // COMPUTATIONS
            const height: number = style.height(data.length)(columns.length);
            const maximum: number = compute_maximum(data) * 1.1;
            const calc = {
                width: (v: number) => values(Math.min(v, maximum)),
                height: (category: string) => (column: string) =>
                    categories(category)! +
                    components(column)! +
                    style.margin.top,
            };

            // LIST UP CHART ELEMENTS
            const categories: d3.ScaleBand<string> = d3
                .scaleBand()
                .domain(data.map((elem) => elem.label))
                .range([0, height - style.margin.top - style.margin.bottom])
                .padding(style.padding);
            const components: d3.ScaleBand<string> = d3
                .scaleBand()
                .domain(columns)
                .range([0, categories.bandwidth()])
                .padding(0.05);
            const values: d3.ScaleLinear<number, number, never> = d3
                .scaleLinear()
                .domain([0, maximum])
                .range([
                    0,
                    style.width - style.margin.left - style.margin.right,
                ]);

            // COLORING
            const color: d3.ScaleOrdinal<string, unknown, never> = d3
                .scaleOrdinal()
                .domain(columns)
                .range(style.colors.slice(0, columns.length));

            // DEFAULT WHITE SVG FILE
            const svg = create_svg_dom(
                style.width,
                height + (2 + environments.length) * ENV_HEIGHT,
            );
            svg.style("background-color", "white");

            //----
            // HELPERS
            //----
            // Y-AXIS, LABELS OF CATEGORIES
            svg.append("g")
                .attr("class", "y axis")
                .attr(
                    "transform",
                    `translate(${style.margin.left - 1},${style.margin.top})`,
                )
                .call(
                    d3
                        .axisLeft(categories)
                        .tickSize(0)
                        .tickFormat((str) => str + "    "),
                );

            // X-AXIS, MEASURED SCALAR VALUES
            svg.append("g")
                .attr("class", "x axis")
                .attr(
                    "transform",
                    `translate(${style.margin.left - 1},${
                        height - style.margin.bottom
                    })`,
                )
                .call(
                    d3
                        .axisBottom(values)
                        .ticks(5)
                        .tickSizeOuter(0)
                        .tickFormat((v) => v.toLocaleString() + "x"),
                );

            // TITLE
            svg.append("text")
                .attr(
                    "transform",
                    `translate(${style.width / 2}, ${
                        (2 * style.margin.top) / 3
                    })`,
                )
                .style("text-anchor", "middle")
                .style("font-size", "20px")
                .style("font-weight", "bold")
                .text(title);

            // LEGEND
            svg.append("rect")
                .attr("x", style.width - style.margin.right + 10 + 5)
                .attr("y", style.margin.top + columns.length * 20)
                .attr("width", 230)
                .attr("height", 5)
                .attr("fill", "gray");
            svg.append("rect")
                .attr("x", style.width - style.margin.right + 10)
                .attr("y", style.margin.top - 10)
                .attr("width", 230)
                .attr("height", columns.length * 20 + 10)
                .attr("fill", "none")
                .attr("stroke", "black");
            columns.forEach((col, i) => {
                svg.append("rect")
                    .attr("x", style.width - style.margin.right + 10 + 10)
                    .attr("y", style.margin.top + 20 * i)
                    .attr("width", 10)
                    .attr("height", 10)
                    .style("fill", style.colors[i]);
                svg.append("text")
                    .attr("x", style.width - style.margin.right + 10 + 25)
                    .attr("y", style.margin.top + 20 * i + 10)
                    .style("font-size", "12px")
                    .text(col);
            });

            // ENVIRONMENTS
            environments.forEach((text, i) =>
                svg
                    .append("text")
                    .attr("x", 20)
                    .attr("y", height + ENV_HEIGHT * (i + 2))
                    .style("font-size", "12px")
                    .text(`  - ${text}`),
            );

            //----
            // BAR CHARTS
            //----
            // LISTING UP DATA
            const mapped = svg
                .append("g")
                .selectAll("g")
                .data(data)
                .enter()
                .append("g")
                .selectAll("rect")
                .data((d) =>
                    columns.map((column) => ({
                        column,
                        category: d.label,
                        value:
                            d.result[column] !== 0 &&
                            Object.values(d.result).filter((val) => val !== 0)
                                .length === 1
                                ? Number.POSITIVE_INFINITY
                                : d.result[column],
                    })),
                );

            // DRAW BARS
            mapped
                .enter()
                .append("rect")
                .attr("x", style.margin.left)
                .attr("y", (d) => calc.height(d.category)(d.column))
                .attr("width", (d) => calc.width(d.value))
                .attr("height", components.bandwidth())
                .attr("fill", (d) => color(d.column) as string);

            // LABELING DATA
            mapped
                .enter()
                .append("text")
                .attr("class", "label")
                .attr("x", (d) => calc.width(d.value) + style.margin.left + 8.5)
                .attr("y", (d) => calc.height(d.category)(d.column) + 8.5)
                .attr("font-size", "10px")
                .text((d) =>
                    Number.isFinite(d.value)
                        ? d.value === 0
                            ? ""
                            : (maximum >= 100
                                  ? Math.round(d.value)
                                  : Math.round(d.value * 100) / 100
                              ).toLocaleString() + "x"
                        : "Infinity",
                );
            mapped
                .enter()
                .append("text")
                .attr("class", "label")
                .attr("x", (d) => calc.width(d.value) + style.margin.left + 5)
                .attr("y", (d) => calc.height(d.category)(d.column) + 10)
                .attr("font-size", "8px")
                .text((d) => (d.value === 0 ? "Failed" : ""));

            // FONT-SIZE
            svg.selectAll("g").style("font-size", "13px");
            return svg;
        };

    const compute_maximum = (data: IMeasure[]) =>
        Math.max(
            ...ArrayUtil.flat(
                data.map((elem) => Object.values(elem.result) as number[]),
            ),
        );

    const create_svg_dom = (width: number, height: number) =>
        d3
            .select(new JSDOM(HTML).window.document.body)
            .append("svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("width", width)
            .attr("height", height);
}

const style = {
    width: 800,
    height: (rows: number) => (cols: number) =>
        rows * cols * 15 + style.margin.top + style.margin.bottom,
    margin: {
        top: 45,
        left: 150,
        right: 165,
        bottom: 30,
    },
    colors: [
        "#4472c4",
        "#ed7d31",
        "#a5a5a5",
        "#ffc000",
        "#5b9bd5",
        "#70ad47",
        "#8a2be2",
        "#7c0a02",
    ],
    padding: 0.1,
};
const ENV_HEIGHT = 17;
const HTML = `<html><body /></html>`;
