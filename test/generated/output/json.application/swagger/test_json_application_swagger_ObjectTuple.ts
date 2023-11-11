import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectTuple } from "../../../../structures/ObjectTuple";

export const test_json_application_swagger_ObjectTuple = _test_json_application(
    "swagger",
)("ObjectTuple")({
    schemas: [
        {
            $ref: "#/components/schemas/ObjectTuple",
        },
    ],
    components: {
        schemas: {
            ObjectTuple: {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ObjectTuple.ISection",
                        },
                        {
                            $ref: "#/components/schemas/ObjectTuple.ICitizen",
                        },
                    ],
                },
                minItems: 2,
                maxItems: 2,
                "x-typia-tuple": {
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
            },
            "ObjectTuple.ISection": {
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
                nullable: false,
                required: ["id", "code", "name"],
                "x-typia-jsDocTags": [],
            },
            "ObjectTuple.ICitizen": {
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
                nullable: false,
                required: ["id", "mobile", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
});
