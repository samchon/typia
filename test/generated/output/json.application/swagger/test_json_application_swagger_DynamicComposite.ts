import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";

export const test_json_application_swagger_DynamicComposite =
    _test_json_application("swagger")("DynamicComposite")({
        schemas: [
            {
                $ref: "#/components/schemas/DynamicComposite",
            },
        ],
        components: {
            schemas: {
                DynamicComposite: {
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
                    nullable: false,
                    required: ["id", "name"],
                    "x-typia-jsDocTags": [],
                    "x-typia-patternProperties": {
                        "^[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        "^(prefix_(.*))": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "((.*)_postfix)$": {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        "^(value_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$": {
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
                        "^(between_(.*)_and_[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)$":
                            {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                    },
                    additionalProperties: {
                        oneOf: [
                            {
                                "x-typia-required": false,
                                type: "number",
                            },
                            {
                                "x-typia-required": false,
                                type: "string",
                            },
                            {
                                "x-typia-required": false,
                                type: "boolean",
                            },
                        ],
                        "x-typia-required": false,
                    },
                },
            },
        },
        purpose: "swagger",
    });
