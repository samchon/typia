import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_json_application_ajv_standard_ObjectUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
            y: {
              type: "number",
            },
            slope: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["x", "y"],
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
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            distance: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["p1", "p2"],
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
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            height: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            area: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["p1", "p2", "p3"],
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
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            height: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            area: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["p1", "p2", "p3", "p4"],
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
            },
            length: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["points"],
        },
        "ObjectUnionImplicit.IPolygon": {
          $id: "#/components/schemas/ObjectUnionImplicit.IPolygon",
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
            },
            area: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["outer"],
        },
        "ObjectUnionImplicit.ICircle": {
          $id: "#/components/schemas/ObjectUnionImplicit.ICircle",
          type: "object",
          properties: {
            radius: {
              type: "number",
            },
            centroid: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            area: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["radius"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
