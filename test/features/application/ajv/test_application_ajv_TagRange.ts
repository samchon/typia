import typia from "../../../../src";
import { TagRange } from "../../../structures/TagRange";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagRange = 
    _test_application("ajv")(
        "TagRange",
        typia.application<[TagRange], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "components#/schemas/TagRange.Type"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "TagRange.Type": {
                $id: "components#/schemas/TagRange.Type",
                type: "object",
                properties: {
                    minimum: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "minimum",
                                value: 3
                            }
                        ],
                        "x-typia-jsDocTags": [
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
                    maximum: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "maximum",
                                value: 7
                            }
                        ],
                        "x-typia-jsDocTags": [
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
                    },
                    minimum_and_maximum: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "minimum",
                                value: 3
                            },
                            {
                                kind: "maximum",
                                value: 7
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
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
                        minimum: 3,
                        maximum: 7
                    },
                    greater: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                minimum: {
                                    include: false,
                                    value: 3
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "(3",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        exclusiveMinimum: 3
                    },
                    greater_equal: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                minimum: {
                                    include: true,
                                    value: 3
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "[3",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        minimum: 3
                    },
                    less: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                maximum: {
                                    include: false,
                                    value: 7
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "7)",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        exclusiveMaximum: 7
                    },
                    less_equal: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                maximum: {
                                    include: true,
                                    value: 7
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "7]",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        maximum: 7
                    },
                    greater_less: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                minimum: {
                                    include: false,
                                    value: 3
                                },
                                maximum: {
                                    include: false,
                                    value: 7
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "(3, 7)",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        exclusiveMinimum: 3,
                        exclusiveMaximum: 7
                    },
                    greater_equal_less: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                minimum: {
                                    include: true,
                                    value: 3
                                },
                                maximum: {
                                    include: false,
                                    value: 7
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "[3, 7)",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        minimum: 3,
                        exclusiveMaximum: 7
                    },
                    greater_less_equal: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "range",
                                minimum: {
                                    include: false,
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
                                name: "range",
                                text: [
                                    {
                                        text: "(3, 7]",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        exclusiveMinimum: 3,
                        maximum: 7
                    },
                    greater_equal_less_equal: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
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
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "range",
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
                    }
                },
                nullable: false,
                required: [
                    "minimum",
                    "maximum",
                    "minimum_and_maximum",
                    "greater",
                    "greater_equal",
                    "less",
                    "less_equal",
                    "greater_less",
                    "greater_equal_less",
                    "greater_less_equal",
                    "greater_equal_less_equal"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);