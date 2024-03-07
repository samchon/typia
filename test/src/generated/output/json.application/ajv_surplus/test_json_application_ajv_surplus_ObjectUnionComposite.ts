import typia from "typia";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ObjectUnionComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            y: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionComposite.ILine": {
          $id: "#/components/schemas/ObjectUnionComposite.ILine",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["p1", "p2"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionComposite.ITriangle": {
          $id: "#/components/schemas/ObjectUnionComposite.ITriangle",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["p1", "p2", "p3"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionComposite.IRectangle": {
          $id: "#/components/schemas/ObjectUnionComposite.IRectangle",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["p1", "p2", "p3", "p4"],
          "x-typia-jsDocTags": [],
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["points"],
          "x-typia-jsDocTags": [],
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["outer", "inner"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionComposite.IPolygon": {
          $id: "#/components/schemas/ObjectUnionComposite.IPolygon",
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["outer", "inner"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionComposite.ICircle": {
          $id: "#/components/schemas/ObjectUnionComposite.ICircle",
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            radius: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["centroid", "radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
