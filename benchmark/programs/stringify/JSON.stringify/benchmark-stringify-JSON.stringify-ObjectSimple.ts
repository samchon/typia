import { ObjectSimple } from "../../../../test/structures/ObjectSimple";
import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

createStringifyBenchmarkProgram((value: ObjectSimple) => JSON.stringify(value));
