import TSON from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_template = _test_application_ajv(
    "dynamic template",
    TSON.application<[DynamicTemplate], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicTemplate",
            },
        ],
        components: {
            schemas: {
                DynamicTemplate: {
                    $id: "components#/schemas/DynamicTemplate",
                    type: "object",
                    properties: {},
                    patternProperties: {
                        "^(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "((.*)_postfix)$": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "^(value_-?\\d+\\.?\\d*)$": {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
