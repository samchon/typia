import TSON from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_template_constant = _test_application_ajv(
    "pattern tag",
    TSON.application<[TemplateConstant], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/TemplateConstant.Type",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "TemplateConstant.Type": {
                    $id: "components#/schemas/TemplateConstant.Type",
                    type: "object",
                    properties: {
                        prefix: {
                            type: "string",
                            enum: ["prefix_A", "prefix_B", "prefix_C"],
                            nullable: false,
                            "x-tson-required": true,
                        },
                        postfix: {
                            type: "string",
                            enum: ["2_postfix", "3_postfix", "1_postfix"],
                            nullable: false,
                            "x-tson-required": true,
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
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["prefix", "postfix", "combined"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
