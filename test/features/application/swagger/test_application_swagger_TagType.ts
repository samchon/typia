import typia from "../../../../src";
import { TagType } from "../../../structures/TagType";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagType = _test_application("swagger")(
    "TagType",
    typia.application<[TagType], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagType.Type",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "TagType.Type": {
                    type: "object",
                    properties: {
                        int: {
                            type: "integer",
                            nullable: false,
                            description: "Integer value.",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-typia-jsDocTags": [
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
                            "x-typia-required": true,
                        },
                        uint: {
                            type: "integer",
                            nullable: false,
                            description: "Unsigned integer value.",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
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
                            "x-typia-required": true,
                            minimum: 0,
                        },
                    },
                    nullable: false,
                    required: ["int", "uint"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
