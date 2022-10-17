import TSON from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_nullable =
    _test_application_swagger(
        "nullable object",
        TSON.application<[ObjectNullable], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectNullable.IProduct",
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ObjectNullable.IProduct": {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                nullable: false,
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
                                        $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                                    },
                                    {
                                        $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                                    },
                                ],
                            },
                        },
                        nullable: false,
                        required: ["name", "manufacturer", "brand", "similar"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectNullable.IManufacturer": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["manufacturer"],
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["type", "name"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectNullable.IBrand.Nullable": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["brand"],
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: true,
                        required: ["type", "name"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectNullable.IManufacturer.Nullable": {
                        type: "object",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["manufacturer"],
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: true,
                        required: ["type", "name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
