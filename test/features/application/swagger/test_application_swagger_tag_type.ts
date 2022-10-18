import TSON from "../../../../src";
import { TagType } from "../../../structures/TagType";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_tag_type = _test_application_swagger(
    "type tag",
    TSON.application<[TagType], "swagger">(),
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
                            "x-tson-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-tson-jsDocTags": [
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
                            "x-tson-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-tson-jsDocTags": [
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
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
