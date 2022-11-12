import TSON from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_array_hierarchical =
    _test_application_swagger(
        "hierarchical array",
        TSON.application<[ArrayHierarchical], "swagger">(),
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
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            serial: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            established_at: {
                                $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                                "x-tson-required": true,
                            },
                            departments: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "serial",
                            "name",
                            "established_at",
                            "departments",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayHierarchical.ITimestamp": {
                        type: "object",
                        properties: {
                            time: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            zone: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["time", "zone"],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayHierarchical.IDepartment": {
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            code: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            sales: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            created_at: {
                                $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                                "x-tson-required": true,
                            },
                            employees: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                                    "x-tson-required": true,
                                },
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "code",
                            "sales",
                            "created_at",
                            "employees",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "ArrayHierarchical.IEmployee": {
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            age: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            grade: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            employeed_at: {
                                $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "name",
                            "age",
                            "grade",
                            "employeed_at",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
