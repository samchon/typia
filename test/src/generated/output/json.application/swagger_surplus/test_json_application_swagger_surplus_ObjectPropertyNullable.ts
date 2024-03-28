import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_json_application_swagger_surplus_ObjectPropertyNullable =
  _test_json_application({
    purpose: "swagger",
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
          type: "array",
          items: {
            oneOf: [
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
          },
          minItems: 4,
          maxItems: 4,
          "x-typia-tuple": {
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
        },
        "ObjectPropertyNullable.IPointerboolean": {
          type: "object",
          properties: {
            value: {
              type: "boolean",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointernumber": {
          type: "object",
          properties: {
            value: {
              type: "number",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointerstring": {
          type: "object",
          properties: {
            value: {
              type: "string",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember": {
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectPropertyNullable.IMember.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectPropertyNullable.IMember.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            grade: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            serial: {
              type: "number",
              nullable: true,
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            activated: {
              type: "boolean",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["id", "name", "activated"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
