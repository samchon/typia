import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";

export const test_json_application_ajv_standard_ObjectUnionComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionComposite",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionComposite",
      },
    ],
    components: {
      schemas: {
        ObjectUnionComposite: {
          $id: "#/components/schemas/ObjectUnionComposite",
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.ILine",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.ITriangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.IRectangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.IPointedShape",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.IPolygon",
              },
              {
                $ref: "#/components/schemas/ObjectUnionComposite.ICircle",
              },
            ],
          },
        },
        "ObjectUnionComposite.IPoint": {
          $id: "#/components/schemas/ObjectUnionComposite.IPoint",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
        },
        "ObjectUnionComposite.ILine": {
          $id: "#/components/schemas/ObjectUnionComposite.ILine",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
          },
          required: ["p1", "p2"],
        },
        "ObjectUnionComposite.ITriangle": {
          $id: "#/components/schemas/ObjectUnionComposite.ITriangle",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
          },
          required: ["p1", "p2", "p3"],
        },
        "ObjectUnionComposite.IRectangle": {
          $id: "#/components/schemas/ObjectUnionComposite.IRectangle",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
          },
          required: ["p1", "p2", "p3", "p4"],
        },
        "ObjectUnionComposite.IPolyline": {
          $id: "#/components/schemas/ObjectUnionComposite.IPolyline",
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              },
            },
          },
          required: ["points"],
        },
        "ObjectUnionComposite.IPointedShape": {
          $id: "#/components/schemas/ObjectUnionComposite.IPointedShape",
          type: "object",
          properties: {
            outer: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              },
            },
            inner: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
          },
          required: ["outer", "inner"],
        },
        "ObjectUnionComposite.IPolygon": {
          $id: "#/components/schemas/ObjectUnionComposite.IPolygon",
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
              },
            },
          },
          required: ["outer", "inner"],
        },
        "ObjectUnionComposite.ICircle": {
          $id: "#/components/schemas/ObjectUnionComposite.ICircle",
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            radius: {
              type: "number",
            },
          },
          required: ["centroid", "radius"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
