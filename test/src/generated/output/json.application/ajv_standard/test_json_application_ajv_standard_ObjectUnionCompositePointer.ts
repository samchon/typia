import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";

export const test_json_application_ajv_standard_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
          $id: "#/components/schemas/ObjectUnionCompositePointer",
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
            $id: "#/components/schemas/IPointerIPointILineITriangleIRectangleIPolylineIPolygonIPointedShapeICircle",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.ILine",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.ITriangle",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.IRectangle",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPointedShape",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPolygon",
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
          $id: "#/components/schemas/ObjectUnionCompositePointer.ICircle",
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
    purpose: "ajv",
    surplus: false,
  });
