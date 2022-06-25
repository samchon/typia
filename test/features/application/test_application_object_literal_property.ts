import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_application } from "./_test_application";

export const test_application_object_literal_property = _test_application(
    "literal propertized object",
    TSON.application<[ObjectLiteralProperty]>(),
{schemas: [
        {
            $ref: "#/components/schemas/ObjectLiteralProperty.ISomething"
        }
    ],
    components: {
        schemas: {
            "ObjectLiteralProperty.ISomething": {
                $id: "ObjectLiteralProperty.ISomething",
                type: "object",
                properties: {
                    "something-interesting-do-you-want?": {
                        type: "string",
                        nullable: false
                    },
                    "or-something-crazy-do-you-want?": {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "something-interesting-do-you-want?",
                    "or-something-crazy-do-you-want?"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);