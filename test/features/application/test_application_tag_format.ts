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
                            format: "uuid",
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            description: "Email address",
                            format: "email",
                        },
                        url: {
                            type: "string",
                            nullable: false,
                            description: "URL address.",
                            format: "url",
                        },
                        ipv4: {
                            type: "string",
                            nullable: false,
                            description: "IPv4 address.",
                            format: "ipv4",
                        },
                        ipv6: {
                            type: "string",
                            nullable: false,
                            description: "IPv6 address.",
                            format: "ipv6",
                        },
                    },
                    nullable: false,
                    required: ["uuid", "email", "url", "ipv4", "ipv6"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
