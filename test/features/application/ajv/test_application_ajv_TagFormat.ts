import TSON from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagFormat = _test_application("ajv")(
    "TagFormat",
    TSON.application<[TagFormat], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TagFormat",
            },
        ],
        components: {
            schemas: {
                TagFormat: {
                    $id: "components#/schemas/TagFormat",
                    type: "object",
                    properties: {
                        uuid: {
                            type: "string",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "uuid",
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            description: "Email address",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "email",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "email",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "email",
                        },
                        url: {
                            type: "string",
                            nullable: false,
                            description: "URL address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "url",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "url",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "url",
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            description: "IPv4 address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv4",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv4",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "ipv4",
                        },
                        ipv6: {
                            type: "string",
                            nullable: false,
                            description: "IPv6 address.",
                            "x-tson-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv6",
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv6",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "ipv6",
                        },
                        custom: {
                            type: "string",
                            nullable: false,
                            description: "A custom format string.",
                            "x-tson-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "my-custom-format",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                            format: "my-custom-format",
                        },
                    },
                    nullable: false,
                    required: [
                        "uuid",
                        "email",
                        "url",
                        "ipv4",
                        "ipv6",
                        "custom",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
