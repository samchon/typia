import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../../structures/ArrayRepeatedNullable";

export const test_json_application_ajv_ArrayRepeatedNullable =
    _test_json_application("ajv")("ArrayRepeatedNullable")({
        schemas: [
            {
                $ref: "#/components/schemas/ArrayRepeatedNullable",
            },
        ],
        components: {
            schemas: {
                ArrayRepeatedNullable: {
                    $id: "#/components/schemas/ArrayRepeatedNullable",
                    oneOf: [
                        {
                            type: "null",
                        },
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayRepeatedNullable",
                            },
                        },
                    ],
                },
            },
        },
        purpose: "ajv",
    });
