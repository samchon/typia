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
                    type: "object",
                    properties: {
                        pagination: {
                            $ref: "#/components/schemas/ObjectGenericArray.IPagination",
                        },
                        data: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectGenericArray.IPerson_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectGenericArray.IPerson",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["pagination", "data"],
                },
                "ObjectGenericArray.IPagination": {
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
                },
                "Array_lt_ObjectGenericArray.IPerson_gt_": {
                    type: "object",
                    properties: {
                        length: {
                            type: "number",
                            nullable: false,
                            description:
                                "Gets or sets the length of the array. This is a number one higher than the highest index in the array.",
                        },
                    },
                    nullable: false,
                    required: ["length"],
                },
                "ObjectGenericArray.IPerson": {
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
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
