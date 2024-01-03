import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_json_application_ajv_surplus_ObjectUnionExplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
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
          $id: "#/components/schemas/ObjectUnionExplicit",
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
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
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
            type: {
              type: "string",
              enum: ["point"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["x", "y", "type"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine": {
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["line"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["p1", "p2", "type"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicit.IPoint": {
          $id: "#/components/schemas/ObjectUnionExplicit.IPoint",
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
        "ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["triangle"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["p1", "p2", "p3", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p3: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              p4: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["rectangle"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["p1", "p2", "p3", "p4", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                },
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["polyline"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["points", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon":
          {
            $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
            type: "object",
            properties: {
              outer: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              inner: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                },
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              type: {
                type: "string",
                enum: ["polygon"],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["outer", "inner", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicit.IPolyline": {
          $id: "#/components/schemas/ObjectUnionExplicit.IPolyline",
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["points"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle": {
          $id: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
          type: "object",
          properties: {
            centroid: {
              $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            radius: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["circle"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["centroid", "radius", "type"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
