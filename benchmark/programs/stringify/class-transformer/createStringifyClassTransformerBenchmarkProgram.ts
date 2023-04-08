import {
    ClassConstructor,
    classToPlain,
    plainToClass,
} from "class-transformer";

import { createStringifyBenchmarkProgram } from "../createStringifyBenchmarkProgram";

export const createStringifyClassTransformerBenchmarkProgram = <Schema>(
    schema: ClassConstructor<Schema>,
) =>
    createStringifyBenchmarkProgram(<T>(input: T) =>
        JSON.stringify(classToPlain(plainToClass(schema, input))),
    );
