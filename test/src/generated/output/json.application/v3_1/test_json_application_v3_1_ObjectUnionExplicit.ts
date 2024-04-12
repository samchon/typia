import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_json_application_v3_1_ObjectUnionExplicit =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionExplicit",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectUnionExplicit: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
              },
              {
                $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
              },
            ],
          },
        },
        "ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint": {
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
        "ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
            },
            type: {
              const: "line",
            },
          },
          required: ["p1", "p2", "type"],
        },
        "ObjectUnionExplicit.IPoint": {
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
        "ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              type: {
                const: "triangle",
              },
            },
            required: ["p1", "p2", "p3", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle":
          {
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              type: {
                const: "rectangle",
              },
            },
            required: ["p1", "p2", "p3", "p4", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline":
          {
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                },
              },
              type: {
                const: "polyline",
              },
            },
            required: ["points", "type"],
          },
        "ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon":
          {
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                },
              },
              type: {
                const: "polygon",
              },
            },
            required: ["outer", "inner", "type"],
          },
        "ObjectUnionExplicit.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
            },
          },
          required: ["points"],
        },
        "ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle": {
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
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
        $ref: "#/components/schemas/ObjectUnionExplicit",
      },
    ],
  });
