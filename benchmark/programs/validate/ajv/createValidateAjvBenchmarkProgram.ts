import Ajv from "ajv";
import { IJsonApplication } from "typia";

import { createValidateBenchmarkProgram } from "../createValidateBenchmarkProgram";

export const createValidateAjvBenchmarkProgram = (app: IJsonApplication) => {
    const program = new Ajv({
        schemas: Object.values(app.components.schemas ?? {}),
        keywords: [
            "x-typia-tuple",
            "x-typia-metaTags",
            "x-typia-jsDocTags",
            "x-typia-required",
            "x-typia-optional",
            "x-typia-rest",
        ],
        strict: true,
        strictNumbers: false,
        allErrors: true,
    });
    const validate = program.compile(app.schemas[0]);
    createValidateBenchmarkProgram((input) => {
        validate(input);
        return validate.errors ?? [];
    });
};
