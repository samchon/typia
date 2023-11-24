import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";

export const test_json_application_ajv_ObjectUnionCompositePointer =
  _test_json_application("ajv")("ObjectUnionCompositePointer")({
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerIPointILineITriangleIRectangleIPolylineIPolygonIPointedShapeICircle",
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
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
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["value"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionCompositePointer.IPoint": {
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
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
          },
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPolyline": {
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
          type: "object",
          properties: {
            points: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
              },
            },
          },
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPointedShape": {
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPointedShape",
          type: "object",
          properties: {
            outer: {
              "x-typia-required": true,
              "x-typia-optional": false,
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
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.IPolygon": {
          $id: "#/components/schemas/ObjectUnionCompositePointer.IPolygon",
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
            },
            inner: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
              },
            },
          },
          required: ["outer", "inner"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionCompositePointer.ICircle": {
          $id: "#/components/schemas/ObjectUnionCompositePointer.ICircle",
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            radius: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          required: ["centroid", "radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
