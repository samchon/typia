import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectGenericArray = 
    _test_application("swagger")(
        "ObjectGenericArray",
        typia.application<[ObjectGenericArray], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/ObjectGenericArray"
        }
    ],
    components: {
        schemas: {
            ObjectGenericArray: {
                type: "object",
                properties: {
                    pagination: {
                        $ref: "#/components/schemas/ObjectGenericArray.IPagination",
                        "x-typia-required": true
                    },
                    data: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "pagination",
                    "data"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericArray.IPagination": {
                type: "object",
                properties: {
                    page: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    limit: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    total_count: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    total_pages: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "page",
                    "limit",
                    "total_count",
                    "total_pages"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectGenericArray.IPerson": {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    age: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "age"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);