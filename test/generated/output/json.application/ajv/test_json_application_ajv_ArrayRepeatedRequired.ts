import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedRequired } from "../../../../structures/ArrayRepeatedRequired";

export const test_json_application_ajv_ArrayRepeatedRequired =
    _test_json_application("ajv")("ArrayRepeatedRequired")({
        schemas: [
            {
                $ref: "#/components/schemas/ArrayRepeatedRequired",
            },
        ],
        components: {
            schemas: {
                ArrayRepeatedRequired: {
                    $id: "#/components/schemas/ArrayRepeatedRequired",
                    oneOf: [
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayRepeatedRequired",
                            },
                        },
                    ],
                },
            },
        },
        purpose: "ajv",
    });
