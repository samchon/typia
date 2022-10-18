import TSON from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_literal_type = _test_application_ajv(
    "literal propertized object",
    TSON.application<[typeof ObjectLiteralType], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/__object",
            },
        ],
        components: {
            schemas: {
                __object: {
                    $id: "components#/schemas/__object",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        age: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "age"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
