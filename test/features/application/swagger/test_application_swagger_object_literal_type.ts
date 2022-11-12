import TSON from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_literal_type =
    _test_application_swagger(
        "literal propertized object",
        TSON.application<[typeof ObjectLiteralType], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/__object",
                },
            ],
            components: {
                schemas: {
                    __object: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            age: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name", "age"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
