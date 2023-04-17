import typia from "typia";

import { ArraySimple } from "../../../../test/structures/ArraySimple";
import { createStringifyFastBenchmarkProgram } from "./createStringifyFastBenchmarkProgram";

createStringifyFastBenchmarkProgram(typia.application<[ArraySimple], "ajv">());
