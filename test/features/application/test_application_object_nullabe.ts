import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_application } from "../application/_test_application";

export const test_application_object_nullable = _test_application(
    "nullable object",
    TSON.application<[ObjectNullable]>(),
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
                    $id: "ObjectNullable.IProduct",
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
                    },
                    nullable: false,
                    required: [
                        "ObjectNullable.IProduct",
                        "ObjectNullable.IProduct",
                        "ObjectNullable.IProduct",
                    ],
                },
                "ObjectNullable.IManufacturer": {
                    $id: "ObjectNullable.IManufacturer",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["ObjectNullable.IManufacturer"],
                },
                "ObjectNullable.IBrand.Nullable": {
                    $id: "ObjectNullable.IBrand.Nullable",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: true,
                    required: ["ObjectNullable.IBrand.Nullable"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
