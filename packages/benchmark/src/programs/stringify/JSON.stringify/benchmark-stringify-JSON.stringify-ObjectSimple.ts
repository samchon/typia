import { ObjectSimple } from "../../../structures/pure/ObjectSimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectSimple) => JSON.stringify(value));
