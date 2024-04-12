import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";

export const test_json_application_v3_1_ObjectUnionCompositePointer =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionCompositePointer",
  })({
    version: "3.1",
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
            },
          },
          required: ["value"],
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
              },
            },
            required: ["value"],
          },
        "ObjectUnionCompositePointer.IPoint": {
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
        "ObjectUnionCompositePointer.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
          },
          required: ["p1", "p2"],
        },
        "ObjectUnionCompositePointer.ITriangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
          },
          required: ["p1", "p2", "p3"],
        },
        "ObjectUnionCompositePointer.IRectangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
          },
          required: ["p1", "p2", "p3", "p4"],
        },
        "ObjectUnionCompositePointer.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              },
            },
          },
          required: ["points"],
        },
        "ObjectUnionCompositePointer.IPointedShape": {
          type: "object",
          properties: {
            outer: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              },
            },
            inner: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
          },
          required: ["outer", "inner"],
        },
        "ObjectUnionCompositePointer.IPolygon": {
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
              },
            },
          },
          required: ["outer", "inner"],
        },
        "ObjectUnionCompositePointer.ICircle": {
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            radius: {
              type: "number",
            },
          },
          required: ["centroid", "radius"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionCompositePointer",
      },
    ],
  });
