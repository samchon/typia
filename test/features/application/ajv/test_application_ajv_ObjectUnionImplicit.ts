import TSON from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionImplicit = _test_application(
    "ajv",
)("ObjectUnionImplicit", TSON.application<[ObjectUnionImplicit], "ajv">(), {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.ILine",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.ITriangle",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.IRectangle",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPolygon",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionImplicit.ICircle",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectUnionImplicit.IPoint": {
                $id: "components#/schemas/ObjectUnionImplicit.IPoint",
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    y: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    slope: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["x", "y"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.ILine": {
                $id: "components#/schemas/ObjectUnionImplicit.ILine",
                type: "object",
                properties: {
                    p1: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p2: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                    distance: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.ITriangle": {
                $id: "components#/schemas/ObjectUnionImplicit.ITriangle",
                type: "object",
                properties: {
                    p1: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p2: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p3: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                    height: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.IRectangle": {
                $id: "components#/schemas/ObjectUnionImplicit.IRectangle",
                type: "object",
                properties: {
                    p1: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p2: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p3: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    p4: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": true,
                    },
                    width: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                    height: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3", "p4"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolyline": {
                $id: "components#/schemas/ObjectUnionImplicit.IPolyline",
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                    length: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["points"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolygon": {
                $id: "components#/schemas/ObjectUnionImplicit.IPolygon",
                type: "object",
                properties: {
                    outer: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                        "x-tson-required": true,
                    },
                    inner: {
                        type: "array",
                        items: {
                            $ref: "components#/schemas/ObjectUnionImplicit.IPolyline",
                            "x-tson-required": false,
                        },
                        nullable: false,
                        "x-tson-required": false,
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["outer"],
                "x-tson_jsDocTags": [],
            },
            "ObjectUnionImplicit.ICircle": {
                $id: "components#/schemas/ObjectUnionImplicit.ICircle",
                type: "object",
                properties: {
                    centroid: {
                        $ref: "components#/schemas/ObjectUnionImplicit.IPoint",
                        "x-tson-required": false,
                    },
                    radius: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    area: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                required: ["radius"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "components#/schemas",
});
