import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_application } from "./_test_application";

export const test_application_object_nullable = _test_application(
    "nullable object",
    TSON.application<[ObjectNullable]>(),
{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectNullable.IProduct": {
                $id: "ObjectNullable.IProduct",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false
                    },
                    manufacturer: {
                        $ref: "#/components/schemas/ObjectNullable.IManufacturer"
                    },
                    brand: {
                        $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable"
                    },
                    similar: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable"
                            },
                            {
                                $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable"
                            }
                        ]
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "manufacturer",
                    "brand",
                    "similar"
                ]
            },
            "ObjectNullable.IManufacturer": {
                $id: "ObjectNullable.IManufacturer",
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "manufacturer"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "name"
                ]
            },
            "ObjectNullable.IBrand.Nullable": {
                $id: "ObjectNullable.IBrand.Nullable",
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "brand"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: true,
                required: [
                    "type",
                    "name"
                ]
            },
            "ObjectNullable.IManufacturer.Nullable": {
                $id: "ObjectNullable.IManufacturer.Nullable",
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "manufacturer"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: true,
                required: [
                    "type",
                    "name"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);