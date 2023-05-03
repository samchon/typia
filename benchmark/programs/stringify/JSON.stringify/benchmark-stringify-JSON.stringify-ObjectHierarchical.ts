import { ObjectHierarchical } from "../../../../test/structures/ObjectHierarchical";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectHierarchical) =>
    JSON.stringify(value),
);
