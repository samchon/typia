import { ArrayHierarchical } from "../../../../test/structures/ArrayHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArrayHierarchical) =>
    JSON.stringify(value),
);
