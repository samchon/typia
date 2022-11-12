import TSON from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_composite = _test_application_ajv(
    "dynamic composite",
    TSON.application<[DynamicComposite], "ajv">(),
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
                            "x-tson-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "^(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "((.*)_postfix)$": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        "^(value_-?\\d+\\.?\\d*)$": {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
