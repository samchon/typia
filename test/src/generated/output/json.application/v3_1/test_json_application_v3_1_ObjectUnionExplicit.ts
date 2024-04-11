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
          $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpointObjectUnionExplicit.IPoint",
        },
        "ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine": {
          $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorlineObjectUnionExplicit.ILine",
        },
        "ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle":
          {
            $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatortriangleObjectUnionExplicit.ITriangle",
          },
        "ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle":
          {
            $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorrectangleObjectUnionExplicit.IRectangle",
          },
        "ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline":
          {
            $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolylineObjectUnionExplicit.IPolyline",
          },
        "ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon":
          {
            $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorpolygonObjectUnionExplicit.IPolygon",
          },
        "ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle": {
          $ref: "#/components/schemas/ObjectUnionExplicit.DiscriminatorcircleObjectUnionExplicit.ICircle",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionExplicit",
      },
    ],
  });
