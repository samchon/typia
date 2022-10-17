import TSON from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_array = _test_application_ajv(
    "dynamic array",
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
                        },
                        nullable: false,
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
