import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_application } from "./_test_application";

export const test_application_tag_format = _test_application(
    "format tag",
    TSON.application<[TagFormat]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagFormat",
            },
        ],
        components: {
            schemas: {
                TagFormat: {
                    type: "object",
                    properties: {
                        uuid: {
                            type: "string",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            jsDocTags: [
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
                            format: "uuid",
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            description: "Email address",
                            metaTags: [
                                {
                                    kind: "format",
                                    value: "email",
                                },
                            ],
                            jsDocTags: [
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
                            format: "email",
                        },
                        url: {
                            type: "string",
                            nullable: false,
                            description: "URL address.",
                            metaTags: [
                                {
                                    kind: "format",
                                    value: "url",
                                },
                            ],
                            jsDocTags: [
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
                            format: "url",
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            description: "IPv4 address.",
                            metaTags: [
                                {
                                    kind: "format",
                                    value: "ipv4",
                                },
                            ],
                            jsDocTags: [
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
                            format: "ipv4",
                        },
                        ipv6: {
                            type: "string",
                            nullable: false,
                            description: "IPv6 address.",
                            metaTags: [
                                {
                                    kind: "format",
                                    value: "ipv6",
                                },
                            ],
                            jsDocTags: [
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
                            format: "ipv6",
                        },
                    },
                    nullable: false,
                    required: ["uuid", "email", "url", "ipv4", "ipv6"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
