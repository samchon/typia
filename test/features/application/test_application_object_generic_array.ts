import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_application } from "./_test_application";

export const test_application_object_generic_array = _test_application(
    "generic arraied object",
    TSON.application<[ObjectGenericArray]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_": {
                    $id: "ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
                    type: "object",
                    properties: {
                        pagination: {
                            $ref: "#/components/schemas/ObjectGenericArray.IPagination",
                        },
                        data: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
                        "ObjectGenericArray.IPage_lt_ObjectGenericArray.IPerson_gt_",
                    ],
                },
                "ObjectGenericArray.IPagination": {
                    $id: "ObjectGenericArray.IPagination",
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
                    required: [
                        "ObjectGenericArray.IPagination",
                        "ObjectGenericArray.IPagination",
                        "ObjectGenericArray.IPagination",
                        "ObjectGenericArray.IPagination",
                    ],
                },
                "ObjectGenericArray.IPerson": {
                    $id: "ObjectGenericArray.IPerson",
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
                    required: [
                        "ObjectGenericArray.IPerson",
                        "ObjectGenericArray.IPerson",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
