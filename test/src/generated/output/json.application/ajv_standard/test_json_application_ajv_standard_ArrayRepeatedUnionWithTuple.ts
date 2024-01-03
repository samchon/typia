import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_ajv_standard_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedUnionWithTuple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedUnionWithTuple: {
          $id: "#/components/schemas/ArrayRepeatedUnionWithTuple",
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
                $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IBox3D",
              },
            },
            {
              type: "array",
              items: [
                {
                  type: "string",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "number",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "boolean",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              ],
              minItems: 3,
              maxItems: 3,
            },
            {
              type: "array",
              items: [
                {
                  $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IBox3D",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              ],
              minItems: 2,
              maxItems: 2,
            },
          ],
        },
        "ArrayRepeatedUnionWithTuple.IBox3D": {
          $id: "#/components/schemas/ArrayRepeatedUnionWithTuple.IBox3D",
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            position: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
          },
          required: ["scale", "position", "rotate", "pivot"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRepeatedUnionWithTuple.IPoint3D": {
          $id: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          required: ["x", "y", "z"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
