import { ArraySimple } from "../../../structures/pure/ArraySimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ArraySimple) => JSON.stringify(value));
