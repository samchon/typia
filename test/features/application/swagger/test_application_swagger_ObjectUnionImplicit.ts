import TSON from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUnionImplicit = 
    _test_application("swagger")(
        "ObjectUnionImplicit",
        TSON.application<[ObjectUnionImplicit], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ILine"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ITriangle"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IRectangle"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolygon"
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ICircle"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectUnionImplicit.IPoint": {
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    y: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    slope: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "x",
                    "y"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.ILine": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    },
                    distance: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "p1",
                    "p2"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.ITriangle": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    },
                    height: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "p1",
                    "p2",
                    "p3"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.IRectangle": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    p4: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": true
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    },
                    height: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "p1",
                    "p2",
                    "p3",
                    "p4"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.IPolyline": {
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            "x-typia-required": true
                        },
                        nullable: false,
                        "x-typia-required": true
                    },
                    length: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "points"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.IPolygon": {
                type: "object",
                properties: {
                    outer: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                        "x-typia-required": true
                    },
                    inner: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                            "x-typia-required": false
                        },
                        nullable: false,
                        "x-typia-required": false
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "outer"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectUnionImplicit.ICircle": {
                type: "object",
                properties: {
                    centroid: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        "x-typia-required": false
                    },
                    radius: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                required: [
                    "radius"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);