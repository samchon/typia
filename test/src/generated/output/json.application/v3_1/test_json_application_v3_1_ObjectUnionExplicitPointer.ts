import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_v3_1_ObjectUnionExplicitPointer =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionExplicitPointer",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionExplicitPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IPointerObjectUnionExplicitPointer.Shape",
              },
            },
          },
          required: ["value"],
        },
        "IPointerObjectUnionExplicitPointer.Shape": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.Shape",
            },
          },
          required: ["value"],
        },
        "ObjectUnionExplicitPointer.Shape": {
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon",
            },
            {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle",
            },
          ],
        },
        "ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint":
          {
            type: "object",
            properties: {
              x: {
                type: "number",
              },
              y: {
                type: "number",
              },
              type: {
                const: "point",
              },
            },
            required: ["x", "y", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                const: "line",
              },
            },
            required: ["p1", "p2", "type"],
          },
        "ObjectUnionExplicitPointer.IPoint": {
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
        "ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                const: "triangle",
              },
            },
            required: ["p1", "p2", "p3", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                const: "rectangle",
              },
            },
            required: ["p1", "p2", "p3", "p4", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline":
          {
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                },
              },
              type: {
                const: "polyline",
              },
            },
            required: ["points", "type"],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon":
          {
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
                },
              },
              type: {
                const: "polygon",
              },
            },
            required: ["outer", "inner", "type"],
          },
        "ObjectUnionExplicitPointer.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
            },
          },
          required: ["points"],
        },
        "ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle":
          {
            type: "object",
            properties: {
              centroid: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              radius: {
                type: "number",
              },
              type: {
                const: "circle",
              },
            },
            required: ["centroid", "radius", "type"],
          },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicitPointer",
      },
    ],
  });
