import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_application } from "./_test_application";

export const test_application_template_union = _test_application(
    "pattern tag",
    TSON.application<[TemplateUnion]>(),
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
                                "/((prefix_)(.*))|((prefix_)(\\d+(\\.\\d+)?))/",
                        },
                        postfix: {
                            type: "string",
                            nullable: false,
                            pattern:
                                "/((.*)(_postfix))|((\\d+(\\.\\d+)?)(_postfix))/",
                        },
                        middle: {
                            type: "string",
                            nullable: false,
                            pattern:
                                "/((the_)(\\d+(\\.\\d+)?)(_value))|(the_false_value)|(the_true_value)/",
                        },
                        mixed: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    pattern:
                                        "/((the_)(\\d+(\\.\\d+)?)(_value))|(the_A_value)|(the_B_value)/",
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
                    jsDocTags: [],
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
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
