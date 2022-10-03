import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_application } from "./_test_application";

export const test_application_template_atomic = _test_application(
    "pattern tag",
    TSON.application<[TemplateAtomic]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TemplateAtomic",
            },
        ],
        components: {
            schemas: {
                TemplateAtomic: {
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            nullable: false,
                            pattern: "(prefix_(.*))",
                        },
                        postfix: {
                            type: "string",
                            nullable: false,
                            pattern: "((.*)_postfix)",
                        },
                        middle_string: {
                            type: "string",
                            nullable: false,
                            pattern: "(the_(.*)_value)",
                        },
                        middle_string_empty: {
                            type: "string",
                            nullable: false,
                            pattern: "(the_(.*)_value)",
                        },
                        middle_numeric: {
                            type: "string",
                            nullable: false,
                            pattern: "(the_-?\\d+\\.?\\d*_value)",
                        },
                        middle_boolean: {
                            type: "string",
                            enum: ["the_false_value", "the_true_value"],
                            nullable: false,
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            pattern:
                                "(-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*)",
                        },
                        email: {
                            type: "string",
                            nullable: false,
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
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
