import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_json_application_v3_1_ObjectPropertyNullable =
  _test_json_application({
    version: "3.1",
    name: "ObjectPropertyNullable",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectPropertyNullable: {
          type: "array",
          prefixItems: [
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
              },
            },
          ],
          additionalItems: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
            },
          },
        },
        "ObjectPropertyNullable.IPointerboolean": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointernumber": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerstring": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IMember",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IMember": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
            grade: {
              type: "number",
            },
            serial: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            activated: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
            },
          },
          required: ["id", "name", "activated"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPropertyNullable",
      },
    ],
  });
