import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_application } from "./_test_application";

export const test_application_tag_type = _test_application(
    "type tag",
    TSON.application<[TagType]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagType",
            },
        ],
        components: {
            schemas: {
                TagType: {
                    type: "object",
                    properties: {
                        int: {
                            type: "integer",
                            nullable: false,
                            description: "Integer value.",
                            metaTags: [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "int",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        uint: {
                            type: "integer",
                            nullable: false,
                            description: "Unsigned integer value.",
                            metaTags: [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 0,
                        },
                    },
                    nullable: false,
                    required: ["int", "uint"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
