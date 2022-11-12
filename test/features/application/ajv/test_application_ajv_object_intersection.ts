import TSON from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_intersection = _test_application_ajv(
    "intersected object",
    TSON.application<[ObjectIntersection], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectIntersection",
            },
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
                            "x-tson-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        vulnerable: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["email", "name", "vulnerable"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
