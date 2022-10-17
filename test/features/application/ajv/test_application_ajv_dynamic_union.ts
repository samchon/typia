import TSON from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_union = _test_application_ajv(
    "dynamic union",
    TSON.application<[DynamicUnion], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicUnion",
            },
        ],
        components: {
            schemas: {
                DynamicUnion: {
                    $id: "components#/schemas/DynamicUnion",
                    type: "object",
                    properties: {},
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            type: "string",
                            nullable: false,
                        },
                        "^(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                        },
                        "((.*)_postfix)$": {
                            type: "string",
                            nullable: false,
                        },
                        "^(value_between_-?\\d+\\.?\\d*_and_-?\\d+\\.?\\d*)$": {
                            type: "number",
                            nullable: false,
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
