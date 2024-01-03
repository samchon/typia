import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_json_application_swagger_standard_ObjectUnionExplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionExplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicit",
      },
    ],
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
              type: "string",
              enum: ["point"],
            },
          },
          nullable: false,
          required: ["x", "y", "type"],
          "x-typia-jsDocTags": [],
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
              type: "string",
              enum: ["line"],
            },
          },
          nullable: false,
          required: ["p1", "p2", "type"],
          "x-typia-jsDocTags": [],
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
          nullable: false,
          required: ["x", "y"],
          "x-typia-jsDocTags": [],
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
                type: "string",
                enum: ["triangle"],
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "type"],
            "x-typia-jsDocTags": [],
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
                type: "string",
                enum: ["rectangle"],
              },
            },
            nullable: false,
            required: ["p1", "p2", "p3", "p4", "type"],
            "x-typia-jsDocTags": [],
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
                type: "string",
                enum: ["polyline"],
              },
            },
            nullable: false,
            required: ["points", "type"],
            "x-typia-jsDocTags": [],
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
                type: "string",
                enum: ["polygon"],
              },
            },
            nullable: false,
            required: ["outer", "inner", "type"],
            "x-typia-jsDocTags": [],
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
          nullable: false,
          required: ["points"],
          "x-typia-jsDocTags": [],
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
              type: "string",
              enum: ["circle"],
            },
          },
          nullable: false,
          required: ["centroid", "radius", "type"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
