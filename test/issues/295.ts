import fs from "fs";

import { HorizontalBarChart } from "../../benchmark/internal/HorizontalBarChart";

const svg = HorizontalBarChart.generate("is() function")([
    "typescript-json",
    "typebox",
    "ajv",
    "io-ts",
    "zod",
    "class-validator",
])([
    {
        category: "object (simple)",
        result: {
            "typescript-json": 5936.0629136943035,
            typebox: 9144.29543790392,
            ajv: 2981.6404976094996,
            "io-ts": 230.5719452632856,
            zod: 22.50234512325831,
            "class-validator": 1,
        },
    },
    {
        category: "object (hierarchical)",
        result: {
            "typescript-json": 2693.442244823829,
            typebox: 3304.1600000000003,
            ajv: 816.6776472747292,
            "io-ts": 168.90221198156684,
            zod: 7.571658903618774,
            "class-validator": 1,
        },
    },
    {
        category: "object (recursive)",
        result: {
            "typescript-json": 2533.0917993450767,
            typebox: 2508.143672511103,
            ajv: 1185.2558336713541,
            "io-ts": 160.96290735567968,
            zod: 1.8518402839200425,
            "class-validator": 1,
        },
    },
    {
        category: "object (union, explicit)",
        result: {
            "typescript-json": 488.7448056753976,
            typebox: 402.0703254672728,
            ajv: 240.1264942325765,
            "io-ts": 90.10476772883132,
            zod: 1,
            "class-validator": 2.480816592621209,
        },
    },
    {
        category: "object (union, implicit)",
        result: {
            "typescript-json": 867.1447518827324,
            typebox: 0,
            ajv: 0,
            "io-ts": 0,
            zod: 0,
            "class-validator": 0,
        },
    },
    {
        category: "array (recursive)",
        result: {
            "typescript-json": 2117.278545729975,
            typebox: 2112.419623506099,
            ajv: 632.9397503166274,
            "io-ts": 153.41553558327217,
            zod: 2.5415111940298503,
            "class-validator": 1,
        },
    },
    {
        category: "array (union, explicit)",
        result: {
            "typescript-json": 1485.9095875343717,
            typebox: 718.8010362694299,
            ajv: 295.1620559062218,
            "io-ts": 129.90791208791208,
            zod: 1,
            "class-validator": 9.740751879699248,
        },
    },
    {
        category: "array (union, implicit)",
        result: {
            "typescript-json": 336.9237249544627,
            typebox: 0,
            ajv: 0,
            "io-ts": 0,
            zod: 0,
            "class-validator": 0,
        },
    },
    {
        category: "ultimate union",
        result: {
            "typescript-json": 1141.126969585929,
            typebox: 0,
            ajv: 0,
            "io-ts": 0,
            zod: 0,
            "class-validator": 0,
        },
    },
]);

fs.writeFileSync(
    __dirname + "/internal/295.svg",
    svg.node()?.outerHTML ?? "",
    "utf8",
);
