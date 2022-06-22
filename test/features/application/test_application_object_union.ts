import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_object_union = _test_application(
    "union object",
    TSON.application<[ObjectUnion]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "oneOf",
                oneOf: [
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUnion.IStore"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUnion.IBrand"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUnion.ICompany"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUnion.IDepartment"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUnion.IEmployee"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectUnion.IStore": {
                $id: "ObjectUnion.IStore",
                $type: "object",
                type: "object",
                properties: {
                    type: {
                        $type: "enum",
                        "enum": [
                            "store"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
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
            "ObjectUnion.IBrand": {
                $id: "ObjectUnion.IBrand",
                $type: "object",
                type: "object",
                properties: {
                    type: {
                        $type: "enum",
                        "enum": [
                            "brand"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
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
            "ObjectUnion.ICompany": {
                $id: "ObjectUnion.ICompany",
                $type: "object",
                type: "object",
                properties: {
                    type: {
                        $type: "enum",
                        "enum": [
                            "company"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    departments: {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "reference",
                            $ref: "#/components/schemas/ObjectUnion.IDepartment"
                        },
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "name",
                    "departments"
                ]
            },
            "ObjectUnion.IDepartment": {
                $id: "ObjectUnion.IDepartment",
                $type: "object",
                type: "object",
                properties: {
                    type: {
                        $type: "enum",
                        "enum": [
                            "department"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    employees: {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "reference",
                            $ref: "#/components/schemas/ObjectUnion.IEmployee"
                        },
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "name",
                    "employees"
                ]
            },
            "ObjectUnion.IEmployee": {
                $id: "ObjectUnion.IEmployee",
                $type: "object",
                type: "object",
                properties: {
                    type: {
                        $type: "enum",
                        "enum": [
                            "employee"
                        ],
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
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