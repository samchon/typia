import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionCompositePointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionCompositePointer",
      },
    ],
    components: {
      schemas: {
        ObjectUnionCompositePointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerIPointILineITriangleIRectangleIPolylineIPolygonIPointedShapeICircle",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        IPointerIPointILineITriangleIRectangleIPolylineIPolygonIPointedShapeICircle:
          {
            type: "object",
            properties: {
              value: {
                oneOf: [
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.ILine",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.ITriangle",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.IRectangle",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.IPointedShape",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolygon",
                  },
                  {
                    $ref: "#/components/schemas/ObjectUnionCompositePointer.ICircle",
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            nullable: false,
            required: ["value"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionCompositePointer.IPoint": {
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
          nullable: false,
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["p1", "p2"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.ITriangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IRectangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3", "p4"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPointedShape": {
          type: "object",
          properties: {
            outer: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["outer", "inner"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPolygon": {
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["outer", "inner"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.ICircle": {
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            radius: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["centroid", "radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
