import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_json_application_swagger_ObjectUnionImplicit =
  _test_json_application("swagger")("ObjectUnionImplicit")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ObjectUnionImplicit: {
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
        },
        "ObjectUnionImplicit.IPoint": {
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
            slope: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
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
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            distance: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2"],
          "x-typia-jsDocTags": [],
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
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            height: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            area: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3"],
          "x-typia-jsDocTags": [],
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
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            height: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            area: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3", "p4"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolyline": {
          type: "object",
          properties: {
            points: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
            },
            length: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolygon": {
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
            },
            inner: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
            },
            area: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["outer"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ICircle": {
          type: "object",
          properties: {
            radius: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            centroid: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            area: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
