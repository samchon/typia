import TSON from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectIntersection = 
    _test_application("ajv")(
        "ObjectIntersection",
        TSON.application<[ObjectIntersection], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/ObjectIntersection"
        }
    ],
    components: {
        schemas: {
            ObjectIntersection: {
                $id: "components#/schemas/ObjectIntersection",
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    vulnerable: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "email",
                    "name",
                    "vulnerable"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);