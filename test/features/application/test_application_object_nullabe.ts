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
                    required: ["name", "manufacturer", "brand"],
                },
                "ObjectNullable.IManufacturer": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name"],
                },
                "ObjectNullable.IBrand.Nullable": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: true,
                    required: ["name"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
