import TSON from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_dynamic_array = _test_application_swagger(
    "dynamic array",
    TSON.application<[DynamicArray], "swagger">(),
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
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
