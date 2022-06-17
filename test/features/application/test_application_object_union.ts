import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_object_union = _test_application(
    "union object",
    TSON.application<[ObjectUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_IStore_or_IBrand_or_ICompany_or_IDepartment_or_IEmployee_gt_",
                    },
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
            },
        ],
        components: {
            schemas: {
                Array_lt_IStore_or_IBrand_or_ICompany_or_IDepartment_or_IEmployee_gt_:
                    {
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
                "ObjectUnion.IStore": {
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
                    required: ["type", "name"],
                },
                "ObjectUnion.IBrand": {
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
                    required: ["type", "name"],
                },
                "ObjectUnion.ICompany": {
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
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectUnion.IDepartment_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectUnion.IDepartment",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["type", "name", "departments"],
                },
                "Array_lt_ObjectUnion.IDepartment_gt_": {
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
                "ObjectUnion.IDepartment": {
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
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ObjectUnion.IEmployee_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ObjectUnion.IEmployee",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["type", "name", "employees"],
                },
                "Array_lt_ObjectUnion.IEmployee_gt_": {
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
                "ObjectUnion.IEmployee": {
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
                    required: ["type", "name"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
