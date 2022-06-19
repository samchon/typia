import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_application } from "./_test_application";

export const test_application_array_hierarchical = _test_application(
    "hierarchical array",
    TSON.application<[ArrayHierarchical]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/Array_lt_ArrayHierarchical.ICompany_gt_",
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArrayHierarchical.ICompany",
                        },
                        nullable: false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "Array_lt_ArrayHierarchical.ICompany_gt_": {
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
                "ArrayHierarchical.ICompany": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        departments: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ArrayHierarchical.IDepartment_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["name", "departments"],
                },
                "Array_lt_ArrayHierarchical.IDepartment_gt_": {
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
                "ArrayHierarchical.IDepartment": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        employees: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/Array_lt_ArrayHierarchical.IEmployee_gt_",
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["name", "employees"],
                },
                "Array_lt_ArrayHierarchical.IEmployee_gt_": {
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
                "ArrayHierarchical.IEmployee": {
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
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
