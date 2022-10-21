import TSON from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_union_implicit =
    _test_application_swagger(
        "union object",
        TSON.application<[ObjectUnionImplicit], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.ILine",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.ITriangle",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IRectangle",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPolygon",
                            },
                            {
                                $ref: "#/components/schemas/ObjectUnionImplicit.ICircle",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ObjectUnionImplicit.IPoint": {
                        type: "object",
                        properties: {
                            x: {
                                type: "number",
                                nullable: false,
                            },
                            y: {
                                type: "number",
                                nullable: false,
                            },
                            slope: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["x", "y"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.ILine": {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            width: {
                                type: "number",
                                nullable: true,
                            },
                            distance: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.ITriangle": {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            width: {
                                type: "number",
                                nullable: true,
                            },
                            height: {
                                type: "number",
                                nullable: true,
                            },
                            area: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2", "p3"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.IRectangle": {
                        type: "object",
                        properties: {
                            p1: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p2: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p3: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            p4: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            width: {
                                type: "number",
                                nullable: true,
                            },
                            height: {
                                type: "number",
                                nullable: true,
                            },
                            area: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["p1", "p2", "p3", "p4"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.IPolyline": {
                        type: "object",
                        properties: {
                            points: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                                },
                                nullable: false,
                            },
                            length: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["points"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.IPolygon": {
                        type: "object",
                        properties: {
                            outer: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                            },
                            inner: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                                },
                                nullable: false,
                            },
                            area: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["outer"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUnionImplicit.ICircle": {
                        type: "object",
                        properties: {
                            centroid: {
                                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            },
                            radius: {
                                type: "number",
                                nullable: false,
                            },
                            area: {
                                type: "number",
                                nullable: true,
                            },
                        },
                        nullable: false,
                        required: ["radius"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
