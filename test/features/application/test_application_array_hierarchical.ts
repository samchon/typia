import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_application } from "./_test_application";

export const test_application_array_hierarchical = _test_application(
    "hierarchical array",
    TSON.application<[ArrayHierarchical]>(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ArrayHierarchical.ICompany",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ArrayHierarchical.ICompany": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        departments: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "departments"],
                },
                "ArrayHierarchical.IDepartment": {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        employees: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                            },
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "employees"],
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
