import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_application } from "./_test_application";

export const test_application_dynamic_array = _test_application(
    "dynamic array",
    TSON.application<[DynamicArray]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicArray",
            },
        ],
        components: {
            schemas: {
                DynamicArray: {
                    type: "object",
                    properties: {},
                    patternProperties: {
                        "(.*)": {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
