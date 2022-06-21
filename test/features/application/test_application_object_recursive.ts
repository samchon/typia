import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_application } from "../application/_test_application";

export const test_application_object_recursive = _test_application(
    "recursive object",
    TSON.application<[ObjectRecursive]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                    },
                    {
                        $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ObjectRecursive.IDepartment": {
                    $id: "ObjectRecursive.IDepartment",
                    type: "object",
                    properties: {
                        parent: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                                },
                            ],
                        },
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectRecursive.IDepartment",
                        "ObjectRecursive.IDepartment",
                        "ObjectRecursive.IDepartment",
                        "ObjectRecursive.IDepartment",
                        "ObjectRecursive.IDepartment",
                        "ObjectRecursive.IDepartment",
                    ],
                },
                "ObjectRecursive.IDepartment.Nullable": {
                    $id: "ObjectRecursive.IDepartment.Nullable",
                    type: "object",
                    properties: {
                        parent: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
                                },
                            ],
                        },
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                        },
                    },
                    nullable: true,
                    required: [
                        "ObjectRecursive.IDepartment.Nullable",
                        "ObjectRecursive.IDepartment.Nullable",
                        "ObjectRecursive.IDepartment.Nullable",
                        "ObjectRecursive.IDepartment.Nullable",
                        "ObjectRecursive.IDepartment.Nullable",
                        "ObjectRecursive.IDepartment.Nullable",
                    ],
                },
                "ObjectRecursive.ITimestamp": {
                    $id: "ObjectRecursive.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            type: "number",
                            nullable: false,
                        },
                        zone: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "ObjectRecursive.ITimestamp",
                        "ObjectRecursive.ITimestamp",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
