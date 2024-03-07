import typia from "typia";
import { ArrayRepeatedUnion } from "../../../../structures/ArrayRepeatedUnion";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ArrayRepeatedUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayRepeatedUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedUnion",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedUnion: {
          oneOf: [
            {
              type: "number",
            },
            {
              type: "boolean",
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnion",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnion.IBox3D",
              },
            },
          ],
        },
        "ArrayRepeatedUnion.IBox3D": {
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            position: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            rotate: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            pivot: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["scale", "position", "rotate", "pivot"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRepeatedUnion.IPoint3D": {
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
            z: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["x", "y", "z"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
