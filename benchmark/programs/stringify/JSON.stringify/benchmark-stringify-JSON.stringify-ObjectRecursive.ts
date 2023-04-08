import { ObjectRecursive } from "../../../../test/structures/ObjectRecursive";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram(
    (value: ObjectRecursive) => JSON.stringify(value)
)