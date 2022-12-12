import typia from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicComposite = _test_application("ajv")(
    "DynamicComposite",
    typia.application<[DynamicComposite], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicComposite",
            },
        ],
        components: {
            schemas: {
                DynamicComposite: {
                    $id: "components#/schemas/DynamicComposite",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        "^(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        "((.*)_postfix)$": {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        "^(value_-?\\d+\\.?\\d*)$": {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                            ],
                            "x-typia-required": true,
                        },
                        "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                            type: "boolean",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
