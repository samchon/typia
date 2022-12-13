import TSON from "../../../../src";
import { TagTuple } from "../../../structures/TagTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagTuple = 
    _test_application("ajv")(
        "TagTuple",
        TSON.application<[TagTuple], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/TagTuple"
        }
    ],
    components: {
        schemas: {
            TagTuple: {
                $id: "components#/schemas/TagTuple",
                type: "object",
                properties: {
                    tuple: {
                        type: "array",
                        items: [
                            {
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
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "range",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    }
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "range",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    }
                                ],
                                "x-typia-required": true,
                                minLength: 3,
                                maxLength: 7
                            },
                            {
                                type: "number",
                                nullable: false,
                                "x-typia-metaTags": [
                                    {
                                        kind: "items",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "range",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    }
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "range",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    }
                                ],
                                "x-typia-required": true,
                                minimum: 3,
                                maximum: 7
                            },
                            {
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
                                                include: true,
                                                value: 7
                                            }
                                        },
                                        {
                                            kind: "range",
                                            minimum: {
                                                include: true,
                                                value: 3
                                            },
                                            maximum: {
                                                include: true,
                                                value: 7
                                            }
                                        },
                                        {
                                            kind: "length",
                                            minimum: {
                                                include: true,
                                                value: 3
                                            },
                                            maximum: {
                                                include: true,
                                                value: 7
                                            }
                                        }
                                    ],
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "items",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "range",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "length",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        }
                                    ],
                                    "x-typia-required": true,
                                    minLength: 3,
                                    maxLength: 7
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
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "range",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    }
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "range",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    }
                                ],
                                "x-typia-required": true,
                                minItems: 3,
                                maxItems: 7
                            },
                            {
                                type: "array",
                                items: {
                                    type: "number",
                                    nullable: false,
                                    "x-typia-metaTags": [
                                        {
                                            kind: "items",
                                            minimum: {
                                                include: true,
                                                value: 3
                                            },
                                            maximum: {
                                                include: true,
                                                value: 7
                                            }
                                        },
                                        {
                                            kind: "range",
                                            minimum: {
                                                include: true,
                                                value: 3
                                            },
                                            maximum: {
                                                include: true,
                                                value: 7
                                            }
                                        },
                                        {
                                            kind: "length",
                                            minimum: {
                                                include: true,
                                                value: 3
                                            },
                                            maximum: {
                                                include: true,
                                                value: 7
                                            }
                                        }
                                    ],
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "items",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "range",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        },
                                        {
                                            name: "length",
                                            text: [
                                                {
                                                    text: "[3, 7]",
                                                    kind: "text"
                                                }
                                            ]
                                        }
                                    ],
                                    "x-typia-required": true,
                                    minimum: 3,
                                    maximum: 7
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
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "range",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7
                                        }
                                    }
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "range",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text"
                                            }
                                        ]
                                    }
                                ],
                                "x-typia-required": true,
                                minItems: 3,
                                maxItems: 7
                            }
                        ],
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "items",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: true,
                                    value: 7
                                }
                            },
                            {
                                kind: "range",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: true,
                                    value: 7
                                }
                            },
                            {
                                kind: "length",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: true,
                                    value: 7
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "items",
                                text: [
                                    {
                                        text: "[3, 7]",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "[3, 7]",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "length",
                                text: [
                                    {
                                        text: "[3, 7]",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "tuple"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);