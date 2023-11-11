import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_swagger_ObjectPartialAndRequired =
    _test_json_application("swagger")("ObjectPartialAndRequired")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectPartialAndRequired",
            },
        ],
        components: {
            schemas: {
                ObjectPartialAndRequired: {
                    type: "object",
                    properties: {
                        string: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        number: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        boolean: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        object: {
                            $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
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
                    },
                    nullable: false,
                    required: ["object", "array"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectPartialAndRequired.Nullable": {
                    type: "object",
                    properties: {
                        string: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        number: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        boolean: {
                            "x-typia-required": true,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        object: {
                            $ref: "#/components/schemas/ObjectPartialAndRequired.Nullable",
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
                    },
                    nullable: true,
                    required: ["object", "array"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
