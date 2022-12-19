import typia from "../../../../src";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionDouble = 
    _test_application("ajv")(
        "ObjectUnionDouble",
        typia.application<[ObjectUnionDouble], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "components#/schemas/ObjectUnionDouble.IA"
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionDouble.IB"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectUnionDouble.IA": {
                $id: "components#/schemas/ObjectUnionDouble.IA",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type",
                        "x-typia-required": true
                    },
                    child: {
                        oneOf: [
                            {
                                $ref: "components#/schemas/ObjectUnionDouble.IAA",
                                "x-typia-required": true
                            },
                            {
                                $ref: "components#/schemas/ObjectUnionDouble.IAB",
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value",
                    "child"
                ],
                "x-typia_jsDocTags": []
            },
            __type: {
                $id: "components#/schemas/__type",
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "x"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionDouble.IAA": {
                $id: "components#/schemas/ObjectUnionDouble.IAA",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type.o1",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "__type.o1": {
                $id: "components#/schemas/__type.o1",
                type: "object",
                properties: {
                    y: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "y"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionDouble.IAB": {
                $id: "components#/schemas/ObjectUnionDouble.IAB",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type.o2",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "__type.o2": {
                $id: "components#/schemas/__type.o2",
                type: "object",
                properties: {
                    y: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "y"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionDouble.IB": {
                $id: "components#/schemas/ObjectUnionDouble.IB",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type.o3",
                        "x-typia-required": true
                    },
                    child: {
                        oneOf: [
                            {
                                $ref: "components#/schemas/ObjectUnionDouble.IBA",
                                "x-typia-required": true
                            },
                            {
                                $ref: "components#/schemas/ObjectUnionDouble.IBB",
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value",
                    "child"
                ],
                "x-typia_jsDocTags": []
            },
            "__type.o3": {
                $id: "components#/schemas/__type.o3",
                type: "object",
                properties: {
                    x: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "x"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionDouble.IBA": {
                $id: "components#/schemas/ObjectUnionDouble.IBA",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type.o4",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "__type.o4": {
                $id: "components#/schemas/__type.o4",
                type: "object",
                properties: {
                    y: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "y"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionDouble.IBB": {
                $id: "components#/schemas/ObjectUnionDouble.IBB",
                type: "object",
                properties: {
                    value: {
                        $ref: "components#/schemas/__type.o5",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "__type.o5": {
                $id: "components#/schemas/__type.o5",
                type: "object",
                properties: {
                    y: {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "y"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);