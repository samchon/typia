import typia from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagAtomicUnion = 
    _test_application("ajv")(
        "TagAtomicUnion",
        typia.application<[TagAtomicUnion], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "components#/schemas/TagAtomicUnion.Type"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "TagAtomicUnion.Type": {
                $id: "components#/schemas/TagAtomicUnion.Type",
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: false,
                                "x-typia-metaTags": [
                                    {
                                        kind: "minimum",
                                        value: 3
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
                                        name: "minimum",
                                        text: [
                                            {
                                                text: "3",
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
                                        kind: "minimum",
                                        value: 3
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
                                        name: "minimum",
                                        text: [
                                            {
                                                text: "3",
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
                                minimum: 3
                            }
                        ],
                        "x-typia-metaTags": [
                            {
                                kind: "minimum",
                                value: 3
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
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
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
                    "value"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);