import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TemplateConstant } from "../../../../structures/TemplateConstant";

export const test_json_application_swagger_TemplateConstant =
    _test_json_application("swagger")("TemplateConstant")({
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
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/TemplateConstant.Type",
                            },
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "TemplateConstant.Type": {
                    type: "object",
                    properties: {
                        prefix: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["prefix_A", "prefix_B", "prefix_C"],
                        },
                        postfix: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["3_postfix", "2_postfix", "1_postfix"],
                        },
                        combined: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: [
                                "the_3_value_with_label_A",
                                "the_3_value_with_label_B",
                                "the_3_value_with_label_C",
                                "the_2_value_with_label_A",
                                "the_2_value_with_label_B",
                                "the_2_value_with_label_C",
                                "the_1_value_with_label_A",
                                "the_1_value_with_label_B",
                                "the_1_value_with_label_C",
                            ],
                        },
                    },
                    nullable: false,
                    required: ["prefix", "postfix", "combined"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
