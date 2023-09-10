import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createAssertBenchmarkProgram } from "../createAssertBenchmarkProgram";

export const createAssertAjvBenchmarkProgram = (app: IJsonApplication) => {
    const program = new Ajv({
        schemas: Object.values(app.components.schemas ?? {}),
        keywords: [
            "x-typia-tuple",
            "x-typia-jsDocTags",
            "x-typia-typeTags",
            "x-typia-required",
            "x-typia-optional",
            "x-typia-rest",
        ],
        strict: true,
        strictNumbers: false,
        allErrors: false,
    });
    try {
        const validate = program.compile(app.schemas[0]);
        createAssertBenchmarkProgram((input) => {
            const success: boolean = validate(input);
            if (!success)
                throw new Error(validate.errors?.[0].message ?? "unknown");
            return input;
        });
    } catch {
        createAssertBenchmarkProgram(() => {
            new Error();
        });
    }
};
