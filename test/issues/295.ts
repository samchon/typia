import fs from "fs";

import { GroupBarChart } from "../../benchmark/internal/GroupBarChart";

const svg = GroupBarChart.generate(["is", "assertType", "validate"])([
    {
        label: "simple object",
        result: {
            is: 100,
            assertType: 70,
            validate: 50,
        },
    },
    {
        label: "hierarchical object",
        result: {
            is: 100,
            assertType: 60,
            validate: 40,
        },
    },
]);
fs.writeFileSync(
    __dirname + "/internal/295.svg",
    svg.node()?.outerHTML ?? "",
    "utf8",
);
