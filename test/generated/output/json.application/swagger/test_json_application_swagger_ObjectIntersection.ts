import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectIntersection } from "../../../../structures/ObjectIntersection";

export const test_json_application_swagger_ObjectIntersection =
    _test_json_application("swagger")("ObjectIntersection")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectIntersection",
            },
        ],
        components: {
            schemas: {
                ObjectIntersection: {
                    type: "object",
                    properties: {
                        email: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        vulnerable: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    nullable: false,
                    required: ["email", "name", "vulnerable"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
