import TSON from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_intersection =
    _test_application_swagger(
        "intersected object",
        TSON.application<[ObjectIntersection], "swagger">(),
        {
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
                                type: "string",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            vulnerable: {
                                type: "boolean",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["email", "name", "vulnerable"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
