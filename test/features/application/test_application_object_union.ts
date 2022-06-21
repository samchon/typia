import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_object_union = _test_application(
    "union object",
    TSON.application<[ObjectUnion]>(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ObjectUnion.IStore",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnion.IBrand",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnion.ICompany",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnion.IDepartment",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnion.IEmployee",
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectUnion.IStore": {
                    $id: "ObjectUnion.IStore",
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["store"],
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["ObjectUnion.IStore", "ObjectUnion.IStore"],
                },
                "ObjectUnion.IBrand": {
                    $id: "ObjectUnion.IBrand",
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
                    nullable: false,
                    required: ["ObjectUnion.IBrand", "ObjectUnion.IBrand"],
                },
                "ObjectUnion.ICompany": {
                    $id: "ObjectUnion.ICompany",
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["company"],
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        departments: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnion.IDepartment",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectUnion.ICompany",
                        "ObjectUnion.ICompany",
                        "ObjectUnion.ICompany",
                    ],
                },
                "ObjectUnion.IDepartment": {
                    $id: "ObjectUnion.IDepartment",
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["department"],
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        employees: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnion.IEmployee",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectUnion.IDepartment",
                        "ObjectUnion.IDepartment",
                        "ObjectUnion.IDepartment",
                    ],
                },
                "ObjectUnion.IEmployee": {
                    $id: "ObjectUnion.IEmployee",
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ["employee"],
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectUnion.IEmployee",
                        "ObjectUnion.IEmployee",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
