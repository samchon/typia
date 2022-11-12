import TSON from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_generic_array =
    _test_application_swagger(
        "generic arraied object",
        TSON.application<[ObjectGenericArray], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectGenericArray_lt_ObjectGenericArray.IPerson_gt_",
                },
            ],
            components: {
                schemas: {
                    "ObjectGenericArray_lt_ObjectGenericArray.IPerson_gt_": {
                        type: "object",
                        properties: {
                            pagination: {
                                $ref: "#/components/schemas/ObjectGenericArray.IPagination",
                                "x-tson-required": true,
                            },
                            data: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["pagination", "data"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGenericArray.IPagination": {
                        type: "object",
                        properties: {
                            page: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            limit: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            total_count: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            total_pages: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "page",
                            "limit",
                            "total_count",
                            "total_pages",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectGenericArray.IPerson": {
                        type: "object",
                        properties: {
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
                        required: ["name", "age"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
