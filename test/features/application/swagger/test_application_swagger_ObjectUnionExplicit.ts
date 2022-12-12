import typia from "../../../../src";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUnionExplicit = _test_application(
    "swagger",
)(
    "ObjectUnionExplicit",
    typia.application<[ObjectUnionExplicit], "swagger">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_",
                        },
                        {
                            $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_",
                        },
                    ],
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_":
                    {
                        type: "object",
                        properties: {
                            x: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            y: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["point"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["x", "y", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_":
                    {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["line"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.IPoint": {
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["x", "y"],
                    "x-typia_jsDocTags": [],
                },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_":
                    {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["triangle"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2", "p3", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_":
                    {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            p4: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["rectangle"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2", "p3", "p4", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_":
                    {
                        type: "object",
                        properties: {
                            points: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                    "x-typia-required": true,
                                },
                                nullable: false,
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["polyline"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["points", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_":
                    {
                        type: "object",
                        properties: {
                            outer: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                                "x-typia-required": true,
                            },
                            inner: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                                    "x-typia-required": true,
                                },
                                nullable: false,
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["polygon"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["outer", "inner", "type"],
                        "x-typia_jsDocTags": [],
                    },
                "ObjectUnionExplicit.IPolyline": {
                    type: "object",
                    properties: {
                        points: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["points"],
                    "x-typia_jsDocTags": [],
                },
                "ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_":
                    {
                        type: "object",
                        properties: {
                            centroid: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            radius: {
                                type: "number",
                                nullable: false,
                                "x-typia-required": true,
                            },
                            type: {
                                type: "string",
                                enum: ["circle"],
                                nullable: false,
                                "x-typia-required": true,
                            },
                        },
                        nullable: false,
                        required: ["centroid", "radius", "type"],
                        "x-typia_jsDocTags": [],
                    },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
