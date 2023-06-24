import { ArraySimple } from "../../../../test/structures/ArraySimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    (value: ArraySimple) => JSON.stringify(value)
)