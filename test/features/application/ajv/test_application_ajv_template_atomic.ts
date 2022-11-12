import TSON from "../../../../src";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_template_atomic = _test_application_ajv(
    "pattern tag",
    TSON.application<[TemplateAtomic], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TemplateAtomic",
            },
        ],
        components: {
            schemas: {
                TemplateAtomic: {
                    $id: "components#/schemas/TemplateAtomic",
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "^(prefix_(.*))",
                        },
                        postfix: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "((.*)_postfix)$",
                        },
                        middle_string: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "^(the_(.*)_value)$",
                        },
                        middle_string_empty: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "^(the_(.*)_value)$",
                        },
                        middle_numeric: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "^(the_-?\\d+\\.?\\d*_value)$",
                        },
                        middle_boolean: {
                            type: "string",
                            enum: ["the_false_value", "the_true_value"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern:
                                "^(-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*)$",
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                            pattern: "((.*)@(.*)\\.(.*))",
                        },
                    },
                    nullable: false,
                    required: [
                        "prefix",
                        "postfix",
                        "middle_string",
                        "middle_string_empty",
                        "middle_numeric",
                        "middle_boolean",
                        "ipv4",
                        "email",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
