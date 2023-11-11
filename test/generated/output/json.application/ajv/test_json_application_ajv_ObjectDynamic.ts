import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_json_application_ajv_ObjectDynamic = _test_json_application(
    "ajv",
)("ObjectDynamic")({
    schemas: [
        {
            $ref: "#/components/schemas/ObjectDynamic",
        },
    ],
    components: {
        schemas: {
            ObjectDynamic: {
                $id: "#/components/schemas/ObjectDynamic",
                type: "object",
                properties: {},
                "x-typia-jsDocTags": [],
                additionalProperties: {
                    oneOf: [
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    ],
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
            },
        },
    },
    purpose: "ajv",
});
