import { ArrayRecursiveUnionExplicit } from "../../../../test/structures/ArrayRecursiveUnionExplicit";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    (value: ArrayRecursiveUnionExplicit) => JSON.stringify(value)
)