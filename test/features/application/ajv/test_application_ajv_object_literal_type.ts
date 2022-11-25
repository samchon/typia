import TSON from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_literal_type = _test_application_ajv(
    "literal propertized object",
    TSON.application<[typeof ObjectLiteralType], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectLiteralType",
            },
        ],
        components: {
            schemas: {
                ObjectLiteralType: {
                    $id: "components#/schemas/ObjectLiteralType",
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
