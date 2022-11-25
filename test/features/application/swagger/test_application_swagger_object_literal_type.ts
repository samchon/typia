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
                    $ref: "#/components/schemas/ObjectLiteralType",
                },
            ],
            components: {
                schemas: {
                    ObjectLiteralType: {
                        type: "object",
                        properties: {},
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
