import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_json_application_ajv_surplus_ObjectPropertyNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectPropertyNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPropertyNullable",
      },
    ],
    components: {
      schemas: {
        ObjectPropertyNullable: {
          $id: "#/components/schemas/ObjectPropertyNullable",
          type: "array",
          items: [
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
        "ObjectPropertyNullable.IPointerboolean": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointernumber": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointerstring": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IMember",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IMember": {
          $id: "#/components/schemas/ObjectPropertyNullable.IMember",
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            grade: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            serial: {
              oneOf: [
                {
                  "x-typia-required": false,
                  "x-typia-optional": true,
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            activated: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "activated"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
