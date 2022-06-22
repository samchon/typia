import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_object_union = _test_application(
    "union object",
    TSON.application<[ObjectUnion]>(),
{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnion.IStore"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnion.IBrand"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnion.ICompany"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnion.IDepartment"
                    },
                    {
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
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "store"
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
            "ObjectUnion.IBrand": {
                $id: "ObjectUnion.IBrand",
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
                nullable: false,
                required: [
                    "type",
                    "name"
                ]
            },
            "ObjectUnion.ICompany": {
                $id: "ObjectUnion.ICompany",
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "company"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    departments: {
                        type: "array",
                        items: {
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
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "department"
                        ],
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    employees: {
                        type: "array",
                        items: {
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
                type: "object",
                properties: {
                    type: {
                        "enum": [
                            "employee"
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
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);