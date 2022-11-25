import TSON from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectRecursive = _test_application("ajv")(
    "ObjectRecursive",
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
                            "x-tson-required": true,
                        },
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
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        created_at: {
                            $ref: "components#/schemas/ObjectRecursive.ITimestamp",
                            "x-tson-required": true,
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
                            "x-tson-required": true,
                        },
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
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        created_at: {
                            $ref: "components#/schemas/ObjectRecursive.ITimestamp",
                            "x-tson-required": true,
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
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
