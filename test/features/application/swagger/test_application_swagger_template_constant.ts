import TSON from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_template_constant =
    _test_application_swagger(
        "pattern tag",
        TSON.application<[TemplateConstant], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/TemplateConstant.Type",
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "TemplateConstant.Type": {
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
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
