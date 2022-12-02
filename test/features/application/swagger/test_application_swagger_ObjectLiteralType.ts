import TSON from "../../../../src";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectLiteralType = _test_application(
    "swagger",
)("ObjectLiteralType", TSON.application<[ObjectLiteralType], "swagger">(), {
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
});
