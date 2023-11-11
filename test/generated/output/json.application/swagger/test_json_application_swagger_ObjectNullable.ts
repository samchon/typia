import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_swagger_ObjectNullable =
    _test_json_application("swagger")("ObjectNullable")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectNullable",
            },
        ],
        components: {
            schemas: {
                ObjectNullable: {
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectNullable.IProduct",
                            },
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IProduct": {
                    type: "object",
                    properties: {
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        manufacturer: {
                            $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                        },
                        brand: {
                            $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                        },
                        similar: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    nullable: false,
                    required: ["name", "manufacturer", "brand", "similar"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IManufacturer": {
                    type: "object",
                    properties: {
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["manufacturer"],
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["type", "name"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IBrand.Nullable": {
                    type: "object",
                    properties: {
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["brand"],
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: true,
                    required: ["type", "name"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IManufacturer.Nullable": {
                    type: "object",
                    properties: {
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["manufacturer"],
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: true,
                    required: ["type", "name"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
