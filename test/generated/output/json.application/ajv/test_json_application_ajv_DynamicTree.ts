import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_json_application_ajv_DynamicTree = _test_json_application(
    "ajv",
)("DynamicTree")({
    schemas: [
        {
            $ref: "#/components/schemas/DynamicTree",
        },
    ],
    components: {
        schemas: {
            DynamicTree: {
                $id: "#/components/schemas/DynamicTree",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    sequence: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    children: {
                        $ref: "#/components/schemas/RecordstringDynamicTree",
                    },
                },
                required: ["id", "sequence", "children"],
                "x-typia-jsDocTags": [],
            },
            RecordstringDynamicTree: {
                $id: "#/components/schemas/RecordstringDynamicTree",
                type: "object",
                properties: {},
                description:
                    "Construct a type with a set of properties K of type T",
                "x-typia-jsDocTags": [],
                additionalProperties: {
                    $ref: "#/components/schemas/DynamicTree",
                },
            },
        },
    },
    purpose: "ajv",
});
