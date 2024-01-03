import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionExplicitPointer } from "../../../../structures/ObjectUnionExplicitPointer";

export const test_json_application_ajv_standard_ObjectUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionExplicitPointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicitPointer",
      },
    ],
    components: {
      schemas: {
        ObjectUnionExplicitPointer: {
          $id: "#/components/schemas/ObjectUnionExplicitPointer",
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
          "x-typia-jsDocTags": [],
        },
        "IPointerObjectUnionExplicitPointer.Shape": {
          $id: "#/components/schemas/IPointerObjectUnionExplicitPointer.Shape",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionExplicitPointer.Shape",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.Shape": {
          $id: "#/components/schemas/ObjectUnionExplicitPointer.Shape",
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
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpointObjectUnionExplicitPointer.IPoint",
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
            required: ["x", "y", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorlineObjectUnionExplicitPointer.ILine",
            type: "object",
            properties: {
              p1: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              p2: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              type: {
                type: "string",
                enum: ["line"],
              },
            },
            required: ["p1", "p2", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.IPoint": {
          $id: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
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
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatortriangleObjectUnionExplicitPointer.ITriangle",
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
                type: "string",
                enum: ["triangle"],
              },
            },
            required: ["p1", "p2", "p3", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorrectangleObjectUnionExplicitPointer.IRectangle",
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
                type: "string",
                enum: ["rectangle"],
              },
            },
            required: ["p1", "p2", "p3", "p4", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolylineObjectUnionExplicitPointer.IPolyline",
            type: "object",
            properties: {
              points: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
                },
              },
              type: {
                type: "string",
                enum: ["polyline"],
              },
            },
            required: ["points", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorpolygonObjectUnionExplicitPointer.IPolygon",
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
                type: "string",
                enum: ["polygon"],
              },
            },
            required: ["outer", "inner", "type"],
            "x-typia-jsDocTags": [],
          },
        "ObjectUnionExplicitPointer.IPolyline": {
          $id: "#/components/schemas/ObjectUnionExplicitPointer.IPolyline",
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
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle":
          {
            $id: "#/components/schemas/ObjectUnionExplicitPointer.DiscriminatorcircleObjectUnionExplicitPointer.ICircle",
            type: "object",
            properties: {
              centroid: {
                $ref: "#/components/schemas/ObjectUnionExplicitPointer.IPoint",
              },
              radius: {
                type: "number",
              },
              type: {
                type: "string",
                enum: ["circle"],
              },
            },
            required: ["centroid", "radius", "type"],
            "x-typia-jsDocTags": [],
          },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
