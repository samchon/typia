import typia from "typia";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectUnionComposite =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          nullable: false,
          required: ["x", "y"],
        },
        "ObjectUnionComposite.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
          },
          nullable: false,
          required: ["p1", "p2"],
        },
        "ObjectUnionComposite.ITriangle": {
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
          nullable: false,
          required: ["p1", "p2", "p3"],
        },
        "ObjectUnionComposite.IRectangle": {
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
          nullable: false,
          required: ["p1", "p2", "p3", "p4"],
        },
        "ObjectUnionComposite.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
              },
            },
          },
          nullable: false,
          required: ["points"],
        },
        "ObjectUnionComposite.IPointedShape": {
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
          nullable: false,
          required: ["outer", "inner"],
        },
        "ObjectUnionComposite.IPolygon": {
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
          nullable: false,
          required: ["outer", "inner"],
        },
        "ObjectUnionComposite.ICircle": {
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
            },
            radius: {
              type: "number",
            },
          },
          nullable: false,
          required: ["centroid", "radius"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
