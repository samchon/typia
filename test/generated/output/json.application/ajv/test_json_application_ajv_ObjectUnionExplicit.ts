import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_json_application_ajv_ObjectUnionExplicit =
    _test_json_application("ajv")("ObjectUnionExplicit")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectUnionExplicit",
            },
        ],
        components: {
            schemas: {
                ObjectUnionExplicit: {
                    $id: "#/components/schemas/ObjectUnionExplicit",
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
                            },
                        ],
                    },
                },
                "ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
                        type: "object",
                        properties: {
                            x: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            y: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["point"],
                            },
                        },
                        required: ["x", "y", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["line"],
                            },
                        },
                        required: ["p1", "p2", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.IPoint": {
                    $id: "#/components/schemas/ObjectUnionExplicit.IPoint",
                    type: "object",
                    properties: {
                        x: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        y: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["x", "y"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["triangle"],
                            },
                        },
                        required: ["p1", "p2", "p3", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            p4: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["rectangle"],
                            },
                        },
                        required: ["p1", "p2", "p3", "p4", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
                        type: "object",
                        properties: {
                            points: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                },
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["polyline"],
                            },
                        },
                        required: ["points", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
                        type: "object",
                        properties: {
                            outer: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                            },
                            inner: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                                },
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["polygon"],
                            },
                        },
                        required: ["outer", "inner", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "ObjectUnionExplicit.IPolyline": {
                    $id: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                    type: "object",
                    properties: {
                        points: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                        },
                    },
                    required: ["points"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle":
                    {
                        $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
                        type: "object",
                        properties: {
                            centroid: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            },
                            radius: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["circle"],
                            },
                        },
                        required: ["centroid", "radius", "type"],
                        "x-typia-jsDocTags": [],
                    },
            },
        },
        purpose: "ajv",
    });
