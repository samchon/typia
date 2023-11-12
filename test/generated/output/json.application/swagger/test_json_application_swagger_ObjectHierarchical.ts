import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_swagger_ObjectHierarchical =
    _test_json_application("swagger")("ObjectHierarchical")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectHierarchical.ICustomer",
            },
        ],
        components: {
            schemas: {
                "ObjectHierarchical.ICustomer": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        channel: {
                            $ref: "#/components/schemas/ObjectHierarchical.IChannel",
                        },
                        member: {
                            $ref: "#/components/schemas/ObjectHierarchical.IMember.Nullable",
                        },
                        account: {
                            $ref: "#/components/schemas/ObjectHierarchical.IAccount.Nullable",
                        },
                        href: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        referrer: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        ip: {
                            type: "array",
                            items: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            minItems: 4,
                            maxItems: 4,
                            "x-typia-tuple": {
                                type: "array",
                                items: [
                                    {
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        "x-typia-rest": false,
                                        type: "number",
                                    },
                                    {
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        "x-typia-rest": false,
                                        type: "number",
                                    },
                                    {
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        "x-typia-rest": false,
                                        type: "number",
                                    },
                                    {
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        "x-typia-rest": false,
                                        type: "number",
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                minItems: 4,
                                maxItems: 4,
                            },
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "channel",
                        "member",
                        "account",
                        "href",
                        "referrer",
                        "ip",
                        "created_at",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.IChannel": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        sequence: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        exclusive: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        priority: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "exclusive",
                        "priority",
                        "created_at",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.ITimestamp": {
                    type: "object",
                    properties: {
                        time: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        zone: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    nullable: false,
                    required: ["time", "zone"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.IMember.Nullable": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        account: {
                            $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        },
                        enterprise: {
                            $ref: "#/components/schemas/ObjectHierarchical.IEnterprise.Nullable",
                        },
                        emails: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                            },
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                        authorized: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    nullable: true,
                    required: [
                        "id",
                        "account",
                        "enterprise",
                        "emails",
                        "created_at",
                        "authorized",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.IAccount": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: ["id", "code", "created_at"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.IEnterprise.Nullable": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        account: {
                            $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        grade: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                    },
                    nullable: true,
                    required: ["id", "account", "name", "grade", "created_at"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectHierarchical.IAccount.Nullable": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        },
                    },
                    nullable: true,
                    required: ["id", "code", "created_at"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
