import TSON from "../../../../src";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalObjectUnion = _test_application(
    "ajv",
)("FunctionalObjectUnion", TSON.application<[FunctionalObjectUnion], "ajv">(), {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "components#/schemas/FunctionalObjectUnion.IPoint",
                    },
                    {
                        $ref: "components#/schemas/FunctionalObjectUnion.ILine",
                    },
                    {
                        $ref: "components#/schemas/FunctionalObjectUnion.IPolyline",
                    },
                    {
                        $ref: "components#/schemas/FunctionalObjectUnion.IPolygon",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "FunctionalObjectUnion.IPoint": {
                $id: "components#/schemas/FunctionalObjectUnion.IPoint",
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
                },
                nullable: false,
                required: ["x", "y"],
                "x-tson_jsDocTags": [],
            },
            "FunctionalObjectUnion.ILine": {
                $id: "components#/schemas/FunctionalObjectUnion.ILine",
                type: "object",
                properties: {
                    p1: {
                        $ref: "components#/schemas/FunctionalObjectUnion.IPoint",
                        "x-tson-required": true,
                    },
                    p2: {
                        $ref: "components#/schemas/FunctionalObjectUnion.IPoint",
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["p1", "p2"],
                "x-tson_jsDocTags": [],
            },
            "FunctionalObjectUnion.IPolyline": {
                $id: "components#/schemas/FunctionalObjectUnion.IPolyline",
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "components#/schemas/FunctionalObjectUnion.IPoint",
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["points"],
                "x-tson_jsDocTags": [],
            },
            "FunctionalObjectUnion.IPolygon": {
                $id: "components#/schemas/FunctionalObjectUnion.IPolygon",
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "components#/schemas/FunctionalObjectUnion.IPoint",
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["points"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "components#/schemas",
});
