import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectInternal } from "../../../../structures/ObjectInternal";

export const test_json_application_ajv_ObjectInternal = _test_json_application(
    "ajv",
)("ObjectInternal")({
    schemas: [
        {
            $ref: "#/components/schemas/ObjectInternal",
        },
    ],
    components: {
        schemas: {
            ObjectInternal: {
                $id: "#/components/schemas/ObjectInternal",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["id", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
