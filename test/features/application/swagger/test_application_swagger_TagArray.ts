import TSON from "../../../../src";
import { TagArray } from "../../../structures/TagArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagArray = 
    _test_application("swagger")(
        "TagArray",
        TSON.application<[TagArray], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/TagArray.Type"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "TagArray.Type": {
                type: "object",
                properties: {
                    items: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-typia-metaTags": [
                                {
                                    kind: "items",
                                    minimum: {
                                        include: true,
                                        value: 3
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7
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
                                            text: "[3, 7)",
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
                        "x-typia-metaTags": [
                            {
                                kind: "items",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: false,
                                    value: 7
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
                                        text: "[3, 7)",
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
                        maxItems: 6
                    },
                    minItems: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-metaTags": [
                                {
                                    kind: "minItems",
                                    value: 3
                                },
                                {
                                    kind: "minimum",
                                    value: 3
                                }
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minItems",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text"
                                        }
                                    ]
                                },
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text"
                                        }
                                    ]
                                }
                            ],
                            "x-typia-required": true,
                            minimum: 3
                        },
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "minItems",
                                value: 3
                            },
                            {
                                kind: "minimum",
                                value: 3
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "minItems",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        minItems: 3
                    },
                    maxItems: {
                        type: "array",
                        items: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-typia-metaTags": [
                                        {
                                            kind: "maxItems",
                                            value: 7
                                        },
                                        {
                                            kind: "maxLength",
                                            value: 7
                                        },
                                        {
                                            kind: "maximum",
                                            value: 7
                                        }
                                    ],
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "maxItems",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "maxLength",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "maximum",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        }
                                    ],
                                    "x-typia-required": true,
                                    maxLength: 7
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-typia-metaTags": [
                                        {
                                            kind: "maxItems",
                                            value: 7
                                        },
                                        {
                                            kind: "maxLength",
                                            value: 7
                                        },
                                        {
                                            kind: "maximum",
                                            value: 7
                                        }
                                    ],
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "maxItems",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "maxLength",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "maximum",
                                            text: [
                                                {
                                                    text: "7",
                                                    kind: "text"
                                                }
                                            ]
                                        }
                                    ],
                                    "x-typia-required": true,
                                    maximum: 7
                                }
                            ],
                            "x-typia-metaTags": [
                                {
                                    kind: "maxItems",
                                    value: 7
                                },
                                {
                                    kind: "maxLength",
                                    value: 7
                                },
                                {
                                    kind: "maximum",
                                    value: 7
                                }
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "maxItems",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text"
                                        }
                                    ]
                                },
                                {
                                    name: "maxLength",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text"
                                        }
                                    ]
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text"
                                        }
                                    ]
                                }
                            ],
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "maxItems",
                                value: 7
                            },
                            {
                                kind: "maxLength",
                                value: 7
                            },
                            {
                                kind: "maximum",
                                value: 7
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "maxItems",
                                text: [
                                    {
                                        text: "7",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "maxLength",
                                text: [
                                    {
                                        text: "7",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "maximum",
                                text: [
                                    {
                                        text: "7",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        maxItems: 7
                    },
                    both: {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false,
                            "x-typia-metaTags": [
                                {
                                    kind: "minItems",
                                    value: 3
                                },
                                {
                                    kind: "maxItems",
                                    value: 7
                                },
                                {
                                    kind: "format",
                                    value: "uuid"
                                }
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minItems",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text"
                                        }
                                    ]
                                },
                                {
                                    name: "maxItems",
                                    text: [
                                        {
                                            text: "7",
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
                        "x-typia-metaTags": [
                            {
                                kind: "minItems",
                                value: 3
                            },
                            {
                                kind: "maxItems",
                                value: 7
                            },
                            {
                                kind: "format",
                                value: "uuid"
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "minItems",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "maxItems",
                                text: [
                                    {
                                        text: "7",
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
                        maxItems: 7
                    }
                },
                nullable: false,
                required: [
                    "items",
                    "minItems",
                    "maxItems",
                    "both"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);