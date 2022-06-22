import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_application } from "../application/_test_application";

export const test_application_object_nullable = _test_application(
    "nullable object",
    TSON.application<[ObjectNullable]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "reference",
                $ref: "#/components/schemas/ObjectNullable.IProduct"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectNullable.IProduct": {
                $id: "ObjectNullable.IProduct",
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    manufacturer: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectNullable.IManufacturer"
                    },
                    brand: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable"
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "manufacturer",
                    "brand"
                ]
            },
            "ObjectNullable.IManufacturer": {
                $id: "ObjectNullable.IManufacturer",
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "name"
                ]
            },
            "ObjectNullable.IBrand.Nullable": {
                $id: "ObjectNullable.IBrand.Nullable",
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: true,
                required: [
                    "name"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);