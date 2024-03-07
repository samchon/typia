import typia from "typia";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectUnionImplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUnionImplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ObjectUnionImplicit: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ILine",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ITriangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IRectangle",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolygon",
              },
              {
                $ref: "#/components/schemas/ObjectUnionImplicit.ICircle",
              },
            ],
          },
        },
        "ObjectUnionImplicit.IPoint": {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            slope: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["x", "y"],
        },
        "ObjectUnionImplicit.ILine": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            width: {
              type: "number",
              nullable: true,
            },
            distance: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2"],
        },
        "ObjectUnionImplicit.ITriangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            width: {
              type: "number",
              nullable: true,
            },
            height: {
              type: "number",
              nullable: true,
            },
            area: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3"],
        },
        "ObjectUnionImplicit.IRectangle": {
          type: "object",
          properties: {
            p1: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p2: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p3: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            p4: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            width: {
              type: "number",
              nullable: true,
            },
            height: {
              type: "number",
              nullable: true,
            },
            area: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["p1", "p2", "p3", "p4"],
        },
        "ObjectUnionImplicit.IPolyline": {
          type: "object",
          properties: {
            points: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
              },
            },
            length: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["points"],
        },
        "ObjectUnionImplicit.IPolygon": {
          type: "object",
          properties: {
            outer: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
            },
            inner: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
              },
            },
            area: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["outer"],
        },
        "ObjectUnionImplicit.ICircle": {
          type: "object",
          properties: {
            radius: {
              type: "number",
            },
            centroid: {
              $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
            },
            area: {
              type: "number",
              nullable: true,
            },
          },
          nullable: false,
          required: ["radius"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
