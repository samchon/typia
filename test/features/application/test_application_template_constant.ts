import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_application } from "./_test_application";

export const test_application_template_constant = _test_application(
    "pattern tag",
    TSON.application<[TemplateConstant]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TemplateConstant",
            },
        ],
        components: {
            schemas: {
                TemplateConstant: {
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            enum: ["prefix_A", "prefix_B", "prefix_C"],
                            nullable: false,
                        },
                        postfix: {
                            type: "string",
                            enum: ["2_postfix", "3_postfix", "1_postfix"],
                            nullable: false,
                        },
                        combined: {
                            type: "string",
                            enum: [
                                "the_2_value_with_label_A",
                                "the_2_value_with_label_B",
                                "the_2_value_with_label_C",
                                "the_3_value_with_label_A",
                                "the_3_value_with_label_B",
                                "the_3_value_with_label_C",
                                "the_1_value_with_label_A",
                                "the_1_value_with_label_B",
                                "the_1_value_with_label_C",
                            ],
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["prefix", "postfix", "combined"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
