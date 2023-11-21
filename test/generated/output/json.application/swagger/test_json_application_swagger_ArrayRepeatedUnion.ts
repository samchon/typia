import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedUnion } from "../../../../structures/ArrayRepeatedUnion";

export const test_json_application_swagger_ArrayRepeatedUnion =
  _test_json_application("swagger")("ArrayRepeatedUnion")({
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
            },
            position: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            y: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            z: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          nullable: false,
          required: ["x", "y", "z"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
