import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_json_application_ajv_ObjectUnionImplicit =
  _test_json_application("ajv")("ObjectUnionImplicit")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ObjectUnionImplicit: {
          $id: "#/components/schemas/ObjectUnionImplicit",
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
          $id: "#/components/schemas/ObjectUnionImplicit.IPoint",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ILine": {
          $id: "#/components/schemas/ObjectUnionImplicit.ILine",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            width: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            distance: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["p1", "p2"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ITriangle": {
          $id: "#/components/schemas/ObjectUnionImplicit.ITriangle",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            height: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["p1", "p2", "p3"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IRectangle": {
          $id: "#/components/schemas/ObjectUnionImplicit.IRectangle",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            height: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            area: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["p1", "p2", "p3", "p4"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolyline": {
          $id: "#/components/schemas/ObjectUnionImplicit.IPolyline",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.IPolygon": {
          $id: "#/components/schemas/ObjectUnionImplicit.IPolygon",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["outer"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionImplicit.ICircle": {
          $id: "#/components/schemas/ObjectUnionImplicit.ICircle",
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
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
