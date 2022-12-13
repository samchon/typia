import TSON from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagMatrix = 
    _test_application("ajv")(
        "TagMatrix",
        TSON.application<[TagMatrix], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/TagMatrix"
        }
    ],
    components: {
        schemas: {
            TagMatrix: {
                $id: "components#/schemas/TagMatrix",
                type: "object",
                properties: {
                    matrix: {
                        type: "array",
                        items: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                description: "Doubled array.",
                                "x-typia-metaTags": [
                                    {
                                        kind: "items",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 3
                                        }
                                    },
                                    {
                                        kind: "format",
                                        value: "uuid"
                                    }
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "format",
                                        text: [
                                            {
                                                text: "uuid",
                                                kind: "text"
                                            }
                                        ]
                                    }
                                ],
                                "x-typia-required": true,
                                format: "uuid"
                            },
                            nullable: false,
                            description: "Doubled array.",
                            "x-typia-metaTags": [
                                {
                                    kind: "items",
                                    minimum: {
                                        include: true,
                                        value: 3
                                    },
                                    maximum: {
                                        include: true,
                                        value: 3
                                    }
                                },
                                {
                                    kind: "format",
                                    value: "uuid"
                                }
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "items",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text"
                                        }
                                    ]
                                },
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text"
                                        }
                                    ]
                                }
                            ],
                            "x-typia-required": true,
                            minItems: 3,
                            maxItems: 3
                        },
                        nullable: false,
                        description: "Doubled array.",
                        "x-typia-metaTags": [
                            {
                                kind: "items",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: true,
                                    value: 3
                                }
                            },
                            {
                                kind: "format",
                                value: "uuid"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "items",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "format",
                                text: [
                                    {
                                        text: "uuid",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        minItems: 3,
                        maxItems: 3
                    }
                },
                nullable: false,
                required: [
                    "matrix"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);