import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionCompositePointer } from "../../../../structures/ObjectUnionCompositePointer";

export const test_json_application_swagger_standard_ObjectUnionCompositePointer =
  _test_json_application({
    purpose: "swagger",
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
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerIPointILineITriangleIRectangleIPolylineIPolygonIPointedShapeICircle",
              },
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
            },
            y: {
              type: "number",
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
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
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
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
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
            },
            inner: {
              $ref: "#/components/schemas/ObjectUnionCompositePointer.IPoint",
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
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionCompositePointer.IPolyline",
              },
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
            },
            radius: {
              type: "number",
            },
          },
          nullable: false,
          required: ["centroid", "radius"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
