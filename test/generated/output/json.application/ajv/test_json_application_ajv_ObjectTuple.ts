import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_json_application_ajv_ObjectTuple = _test_json_application(
    "ajv",
)("ObjectTuple")({
    schemas: [
        {
            $ref: "#/components/schemas/ObjectTuple",
        },
    ],
    components: {
        schemas: {
            ObjectTuple: {
                $id: "#/components/schemas/ObjectTuple",
                type: "array",
                items: [
                    {
                        $ref: "#/components/schemas/ObjectTuple.ISection",
                    },
                    {
                        $ref: "#/components/schemas/ObjectTuple.ICitizen",
                    },
                ],
                minItems: 2,
                maxItems: 2,
            },
            "ObjectTuple.ISection": {
                $id: "#/components/schemas/ObjectTuple.ISection",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    code: {
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
                required: ["id", "code", "name"],
                "x-typia-jsDocTags": [],
            },
            "ObjectTuple.ICitizen": {
                $id: "#/components/schemas/ObjectTuple.ICitizen",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    mobile: {
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
                required: ["id", "mobile", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
