import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayHierarchical = 
    _test_application("swagger")(
        "ArrayHierarchical",
        typia.application<[ArrayHierarchical], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ArrayHierarchical.ICompany"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ArrayHierarchical.ICompany": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    serial: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    established_at: {
                        $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                        "x-typia-required": true
                    },
                    departments: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "serial",
                    "name",
                    "established_at",
                    "departments"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayHierarchical.ITimestamp": {
                type: "object",
                properties: {
                    time: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    zone: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "time",
                    "zone"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayHierarchical.IDepartment": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    code: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    sales: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    created_at: {
                        $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                        "x-typia-required": true
                    },
                    employees: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "code",
                    "sales",
                    "created_at",
                    "employees"
                ],
                "x-typia_jsDocTags": []
            },
            "ArrayHierarchical.IEmployee": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    age: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    grade: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    employeed_at: {
                        $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "age",
                    "grade",
                    "employeed_at"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);