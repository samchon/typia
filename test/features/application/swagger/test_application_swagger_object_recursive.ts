import TSON from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_recursive =
    _test_application_swagger(
        "recursive object",
        TSON.application<[ObjectRecursive], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectRecursive.IDepartment",
                },
            ],
            components: {
                schemas: {
                    "ObjectRecursive.IDepartment": {
                        type: "object",
                        properties: {
                            parent: {
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
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
                                $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
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
                        type: "object",
                        properties: {
                            parent: {
                                $ref: "#/components/schemas/ObjectRecursive.IDepartment.Nullable",
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
                                $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
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
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
