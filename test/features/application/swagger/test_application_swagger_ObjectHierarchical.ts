import TSON from "../../../../src";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectHierarchical = _test_application(
    "swagger",
)("ObjectHierarchical", TSON.application<[ObjectHierarchical], "swagger">(), {
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
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    channel: {
                        $ref: "#/components/schemas/ObjectHierarchical.IChannel",
                        "x-tson-required": true,
                    },
                    member: {
                        $ref: "#/components/schemas/ObjectHierarchical.IMember.Nullable",
                        "x-tson-required": true,
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount.Nullable",
                        "x-tson-required": true,
                    },
                    href: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    referrer: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    ip: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
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
                "x-tson_jsDocTags": [],
            },
            "ObjectHierarchical.IChannel": {
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
                    exclusive: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    priority: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
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
                "x-tson_jsDocTags": [],
            },
            "ObjectHierarchical.ITimestamp": {
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
            "ObjectHierarchical.IMember.Nullable": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        "x-tson-required": true,
                    },
                    enterprise: {
                        $ref: "#/components/schemas/ObjectHierarchical.IEnterprise.Nullable",
                        "x-tson-required": true,
                    },
                    emails: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
                    },
                    authorized: {
                        type: "boolean",
                        nullable: false,
                        "x-tson-required": true,
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
                "x-tson_jsDocTags": [],
            },
            "ObjectHierarchical.IAccount": {
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
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "code", "created_at"],
                "x-tson_jsDocTags": [],
            },
            "ObjectHierarchical.IEnterprise.Nullable": {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    grade: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
                    },
                },
                nullable: true,
                required: ["id", "account", "name", "grade", "created_at"],
                "x-tson_jsDocTags": [],
            },
            "ObjectHierarchical.IAccount.Nullable": {
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
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        "x-tson-required": true,
                    },
                },
                nullable: true,
                required: ["id", "code", "created_at"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
