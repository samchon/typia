import typia from "../../../../src";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TemplateAtomic = 
    _test_application("ajv")(
        "TemplateAtomic",
        typia.application<[TemplateAtomic], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/TemplateAtomic"
        }
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
                        "x-typia-required": true,
                        pattern: "^(prefix_(.*))"
                    },
                    postfix: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "((.*)_postfix)$"
                    },
                    middle_string: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "^(the_(.*)_value)$"
                    },
                    middle_string_empty: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "^(the_(.*)_value)$"
                    },
                    middle_numeric: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "^(the_-?\\d+\\.?\\d*_value)$"
                    },
                    middle_boolean: {
                        type: "string",
                        "enum": [
                            "the_false_value",
                            "the_true_value"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    ipv4: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "^(-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*\\.-?\\d+\\.?\\d*)$"
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                        pattern: "((.*)@(.*)\\.(.*))"
                    }
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
                    "email"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);