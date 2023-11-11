import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectRequired } from "../../../../structures/ObjectRequired";

export const test_json_application_ajv_ObjectRequired = _test_json_application(
    "ajv",
)("ObjectRequired")({
    schemas: [
        {
            $ref: "#/components/schemas/RequiredObjectRequired.IBase",
        },
    ],
    components: {
        schemas: {
            "RequiredObjectRequired.IBase": {
                $id: "#/components/schemas/RequiredObjectRequired.IBase",
                type: "object",
                properties: {
                    boolean: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    number: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    string: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    array: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    object: {
                        oneOf: [
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                $ref: "#/components/schemas/ObjectRequired.IBase",
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["boolean", "number", "string", "array", "object"],
                description: "Make all properties in T required",
                "x-typia-jsDocTags": [],
            },
            "ObjectRequired.IBase": {
                $id: "#/components/schemas/ObjectRequired.IBase",
                type: "object",
                properties: {
                    boolean: {
                        "x-typia-required": true,
                        "x-typia-optional": true,
                        type: "boolean",
                    },
                    number: {
                        "x-typia-required": true,
                        "x-typia-optional": true,
                        type: "number",
                    },
                    string: {
                        "x-typia-required": true,
                        "x-typia-optional": true,
                        type: "string",
                    },
                    array: {
                        "x-typia-required": true,
                        "x-typia-optional": true,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "number",
                        },
                    },
                    object: {
                        oneOf: [
                            {
                                "x-typia-required": true,
                                "x-typia-optional": true,
                                type: "null",
                            },
                            {
                                $ref: "#/components/schemas/ObjectRequired.IBase",
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": true,
                    },
                },
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
