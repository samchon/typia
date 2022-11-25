import TSON from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicUnion = _test_application("ajv")(
    "DynamicUnion",
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
                            "x-tson-required": true,
                        },
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
                        "^(value_between_-?\\d+\\.?\\d*_and_-?\\d+\\.?\\d*)$": {
                            type: "number",
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
