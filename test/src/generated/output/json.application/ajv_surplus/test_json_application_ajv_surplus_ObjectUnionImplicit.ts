import typia from "typia";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ObjectUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectUnionImplicit",
  })({
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            y: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            slope: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
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
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            length: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            centroid: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
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
    surplus: true,
  });
