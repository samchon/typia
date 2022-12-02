import TSON from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicArray = _test_application("ajv")(
    "DynamicArray",
    TSON.application<[DynamicArray], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicArray",
            },
        ],
        components: {
            schemas: {
                DynamicArray: {
                    $id: "components#/schemas/DynamicArray",
                    type: "object",
                    properties: {},
                    additionalProperties: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
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
