import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_json_application_swagger_ObjectPropertyNullable =
  _test_json_application("swagger")("ObjectPropertyNullable")({
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
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
                },
              },
              {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
                },
              },
              {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
                },
              },
              {
                "x-typia-rest": false,
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "array",
                items: {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
                },
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
              nullable: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
              nullable: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              nullable: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              nullable: true,
            },
            grade: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            serial: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
              nullable: true,
            },
            activated: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
              nullable: true,
            },
          },
          nullable: true,
          required: ["id", "name", "activated"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
