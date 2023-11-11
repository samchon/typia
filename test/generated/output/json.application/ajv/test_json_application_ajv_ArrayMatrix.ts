import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayMatrix } from "../../../../structures/ArrayMatrix";

export const test_json_application_ajv_ArrayMatrix = _test_json_application(
    "ajv",
)("ArrayMatrix")({
    schemas: [
        {
            $ref: "#/components/schemas/ArrayMatrix",
        },
    ],
    components: {
        schemas: {
            ArrayMatrix: {
                $id: "#/components/schemas/ArrayMatrix",
                type: "array",
                items: {
                    type: "array",
                    items: {
                        type: "array",
                        items: {
                            type: "number",
                        },
                    },
                },
            },
        },
    },
    purpose: "ajv",
});
