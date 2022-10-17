import TSON from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_generic_array = _test_application_ajv(
    "generic arraied object",
    TSON.application<[ObjectGenericArray], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_": {
                    $id: "components#/schemas/ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
                    type: "object",
                    properties: {
                        pagination: {
                            $ref: "components#/schemas/ObjectGenericArray.IPagination",
                        },
                        data: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ObjectGenericArray.IPerson",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["pagination", "data"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectGenericArray.IPagination": {
                    $id: "components#/schemas/ObjectGenericArray.IPagination",
                    type: "object",
                    properties: {
                        page: {
                            type: "number",
                            nullable: false,
                        },
                        limit: {
                            type: "number",
                            nullable: false,
                        },
                        total_count: {
                            type: "number",
                            nullable: false,
                        },
                        total_pages: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["page", "limit", "total_count", "total_pages"],
                    "x-tson_jsDocTags": [],
                },
                "ObjectGenericArray.IPerson": {
                    $id: "components#/schemas/ObjectGenericArray.IPerson",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        age: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "age"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
