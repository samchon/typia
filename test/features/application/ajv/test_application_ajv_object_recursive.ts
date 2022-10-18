import TSON from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_recursive = _test_application_ajv(
    "recursive object",
    TSON.application<[ObjectRecursive], "ajv">(),
    {
        schemas: [
            {
                $recursiveRef:
                    "components#/schemas/ObjectRecursive.IDepartment",
            },
        ],
        components: {
            schemas: {
                "ObjectRecursive.IDepartment": {
                    $id: "components#/schemas/ObjectRecursive.IDepartment",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        parent: {
                            $recursiveRef:
                                "components#/schemas/ObjectRecursive.IDepartment.Nullable",
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
                            $ref: "components#/schemas/ObjectRecursive.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "parent",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ObjectRecursive.IDepartment.Nullable": {
                    $id: "components#/schemas/ObjectRecursive.IDepartment.Nullable",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        parent: {
                            $recursiveRef:
                                "components#/schemas/ObjectRecursive.IDepartment.Nullable",
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
                            $ref: "components#/schemas/ObjectRecursive.ITimestamp",
                        },
                    },
                    nullable: true,
                    required: [
                        "parent",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                    ],
                    "x-tson_jsDocTags": [],
                },
                "ObjectRecursive.ITimestamp": {
                    $id: "components#/schemas/ObjectRecursive.ITimestamp",
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
                    required: ["time", "zone"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
