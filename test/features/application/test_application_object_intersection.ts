import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_application } from "./_test_application";

export const test_application_object_intersection = _test_application(
    "intersected object",
    TSON.application<[ObjectIntersection]>(),
{schemas: [
        {
            $type: "reference",
            $ref: "#/components/schemas/ObjectIntersection"
        }
    ],
    components: {
        schemas: {
            ObjectIntersection: {
                $id: "ObjectIntersection",
                $type: "object",
                type: "object",
                properties: {
                    email: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    vulnerable: {
                        $type: "enum",
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "email",
                    "name",
                    "vulnerable"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);