import TSON from "../../../../src";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_template_union =
    _test_application_swagger(
        "pattern tag",
        TSON.application<[TemplateUnion], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/TemplateUnion",
                },
            ],
            components: {
                schemas: {
                    TemplateUnion: {
                        type: "object",
                        properties: {
                            prefix: {
                                type: "string",
                                nullable: false,
                                pattern:
                                    "^((prefix_(.*))|(prefix_-?\\d+\\.?\\d*))$",
                            },
                            postfix: {
                                type: "string",
                                nullable: false,
                                pattern:
                                    "(((.*)_postfix)|(-?\\d+\\.?\\d*_postfix))$",
                            },
                            middle: {
                                type: "string",
                                nullable: false,
                                pattern:
                                    "^(the_false_value|the_true_value|(the_-?\\d+\\.?\\d*_value))$",
                            },
                            mixed: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                        pattern:
                                            "^(the_A_value|the_B_value|-?\\d+\\.?\\d*|true|false|(the_-?\\d+\\.?\\d*_value))$",
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                    },
                                    {
                                        type: "boolean",
                                        nullable: false,
                                    },
                                    {
                                        $ref: "#/components/schemas/__type",
                                    },
                                ],
                            },
                        },
                        nullable: false,
                        required: ["prefix", "postfix", "middle", "mixed"],
                        "x-tson_jsDocTags": [],
                    },
                    __type: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
