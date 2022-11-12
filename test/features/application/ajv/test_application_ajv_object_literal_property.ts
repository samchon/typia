import TSON from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_literal_property =
    _test_application_ajv(
        "literal propertized object",
        TSON.application<[ObjectLiteralProperty], "ajv">(),
        {
            schemas: [
                {
                    $ref: "components#/schemas/ObjectLiteralProperty.ISomething",
                },
            ],
            components: {
                schemas: {
                    "ObjectLiteralProperty.ISomething": {
                        $id: "components#/schemas/ObjectLiteralProperty.ISomething",
                        type: "object",
                        properties: {
                            "something-interesting-do-you-want?": {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            "or-something-crazy-do-you-want?": {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "something-interesting-do-you-want?",
                            "or-something-crazy-do-you-want?",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
