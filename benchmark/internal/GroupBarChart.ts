import * as d3 from "d3";
import { JSDOM } from "jsdom";

import { ArrayUtil } from "../../src/utils/ArrayUtil";

// declare const d3: typeof _d3;

export namespace GroupBarChart {
    export interface IMeasure<Components extends string> {
        label: string;
        result: Record<Components, number>;
    }

    export const generate =
        <Column extends string>(columns: Column[]) =>
        (data: IMeasure<Column>[]) => {
            // KEY ELEMENTS
            const types = d3
                .scaleBand()
                .domain(data.map((elem) => elem.label))
                .range([0, WIDTH - MARGIN.left - MARGIN.right])
                .padding(PADDING);
            const components = d3
                .scaleBand()
                .domain(columns)
                .range([0, types.bandwidth()])
                .padding(0.05);
            const y = d3
                .scaleLinear()
                .domain([0, compute_maximum(data)])
                .range([HEIGHT - MARGIN.top - MARGIN.bottom, 0]);
            const color = d3
                .scaleOrdinal()
                .domain(columns)
                .range(COLORS.slice(0, columns.length));

            // DEFAULT SVG DOCUMENT
            const svg = create_svg_dom()
                .attr("width", WIDTH)
                .attr("height", HEIGHT);

            // AXISES
            svg.append("g")
                .attr("class", "x axis")
                .attr(
                    "transform",
                    `translate(${MARGIN.left},${HEIGHT - MARGIN.bottom})`,
                )
                .call(d3.axisBottom(types).tickSize(0));
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`)
                .call(d3.axisLeft(y).ticks(5).tickSizeOuter(0));

            // DATA PLACEMENT
            svg.append("g")
                .selectAll("g")
                .data(data)
                .enter()
                .append("g")
                .selectAll("rect")
                .data((d) =>
                    columns.map((key) => ({
                        column: key,
                        label: d.label,
                        value: d.result[key],
                    })),
                )
                .enter()
                .append("rect")
                .attr("x", (d) => types(d.label)! + components(d.column)!)
                .attr("y", (d) => y(d.value) + MARGIN.top)
                .attr("width", components.bandwidth())
                .attr(
                    "height",
                    (d) => HEIGHT - MARGIN.top - MARGIN.bottom - y(d.value),
                )
                .attr("fill", (d) => color(d.column) as string);
            return svg;
        };

    const compute_maximum = <Column extends string>(data: IMeasure<Column>[]) =>
        Math.max(
            ...ArrayUtil.flat(
                data.map((elem) => Object.values(elem.result) as number[]),
            ),
        );

    const create_svg_dom = () =>
        d3
            .select(
                new JSDOM("<html><body></body></html>").window.document.body,
            )
            .append("svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("width", WIDTH)
            .attr("height", HEIGHT);
}

const WIDTH = 800;
const HEIGHT = 500;
const PADDING = 0.2;
const MARGIN = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 50,
};
const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navyblue",
    "purple",
];
