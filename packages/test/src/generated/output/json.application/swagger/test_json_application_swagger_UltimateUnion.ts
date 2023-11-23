import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_json_application_swagger_UltimateUnion =
  _test_json_application("swagger")("UltimateUnion")({
    schemas: [
      {
        $ref: "#/components/schemas/UltimateUnion",
      },
    ],
    components: {
      schemas: {
        UltimateUnion: {
          type: "array",
          items: {
            $ref: "#/components/schemas/IJsonApplication",
          },
        },
        IJsonApplication: {
          type: "object",
          properties: {
            schemas: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            components: {
              $ref: "#/components/schemas/IJsonComponents",
            },
            purpose: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["swagger", "ajv"],
            },
          },
          nullable: false,
          required: ["schemas", "components", "purpose"],
          "x-typia-jsDocTags": [],
        },
        IJsonSchema: {
          oneOf: [
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IBoolean",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IInteger",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.INumber",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IString",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IArray",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IOneOf",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IReference",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.INullOnly",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IUnknown",
            },
          ],
        },
        "IJsonSchema.IEnumerationboolean": {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["boolean"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IJsDocTagInfo: {
          type: "object",
          properties: {
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            text: {
              "x-typia-required": true,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo.IText",
              },
            },
          },
          nullable: false,
          required: ["name"],
          "x-typia-jsDocTags": [],
        },
        "IJsDocTagInfo.IText": {
          type: "object",
          properties: {
            text: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            kind: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: ["text", "kind"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IEnumerationnumber": {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["number"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IEnumerationstring": {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["string"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IBoolean": {
          type: "object",
          properties: {
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["boolean"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IMetadataTypeTag: {
          type: "object",
          properties: {
            target: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["string", "number", "bigint", "boolean", "array"],
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            kind: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            exclusive: {
              oneOf: [
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "boolean",
                },
                {
                  "x-typia-required": true,
                  "x-typia-optional": false,
                  type: "array",
                  items: {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "string",
                  },
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            value: {
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            validate: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
          },
          nullable: false,
          required: ["target", "name", "kind", "exclusive"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IInteger": {
          type: "object",
          properties: {
            minimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            maximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            exclusiveMinimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            exclusiveMaximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            multipleOf: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["integer"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.INumber": {
          type: "object",
          properties: {
            minimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            maximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            exclusiveMinimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            exclusiveMaximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            multipleOf: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["number"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IString": {
          type: "object",
          properties: {
            minLength: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxLength: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            pattern: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            format: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["string"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IArray": {
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
            },
            minItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["array"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["items", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.ITuple": {
          type: "object",
          properties: {
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            minItems: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["array"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["items", "minItems", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IOneOf": {
          type: "object",
          properties: {
            oneOf: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["oneOf"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IReference": {
          type: "object",
          properties: {
            $ref: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["$ref"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.INullOnly": {
          type: "object",
          properties: {
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["null"],
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IUnknown": {
          type: "object",
          properties: {
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
        IJsonComponents: {
          type: "object",
          properties: {
            schemas: {
              $ref: "#/components/schemas/RecordstringIObjectIAlias",
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
        RecordstringIObjectIAlias: {
          type: "object",
          properties: {},
          nullable: false,
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          "x-typia-additionalProperties": {
            oneOf: [
              {
                $ref: "#/components/schemas/IJsonComponents.IObject",
              },
              {
                $ref: "#/components/schemas/IEnumerationstringIIdentified",
              },
              {
                $ref: "#/components/schemas/IEnumerationnumberIIdentified",
              },
              {
                $ref: "#/components/schemas/IEnumerationbooleanIIdentified",
              },
              {
                $ref: "#/components/schemas/IBooleanIIdentified",
              },
              {
                $ref: "#/components/schemas/INumberIIdentified",
              },
              {
                $ref: "#/components/schemas/IIntegerIIdentified",
              },
              {
                $ref: "#/components/schemas/IStringIIdentified",
              },
              {
                $ref: "#/components/schemas/IArrayIIdentified",
              },
              {
                $ref: "#/components/schemas/ITupleIIdentified",
              },
              {
                $ref: "#/components/schemas/IOneOfIIdentified",
              },
              {
                $ref: "#/components/schemas/IReferenceIIdentified",
              },
              {
                $ref: "#/components/schemas/IUnknownIIdentified",
              },
              {
                $ref: "#/components/schemas/INullOnlyIIdentified",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          additionalProperties: {
            oneOf: [
              {
                $ref: "#/components/schemas/IJsonComponents.IObject",
              },
              {
                $ref: "#/components/schemas/IEnumerationstringIIdentified",
              },
              {
                $ref: "#/components/schemas/IEnumerationnumberIIdentified",
              },
              {
                $ref: "#/components/schemas/IEnumerationbooleanIIdentified",
              },
              {
                $ref: "#/components/schemas/IBooleanIIdentified",
              },
              {
                $ref: "#/components/schemas/INumberIIdentified",
              },
              {
                $ref: "#/components/schemas/IIntegerIIdentified",
              },
              {
                $ref: "#/components/schemas/IStringIIdentified",
              },
              {
                $ref: "#/components/schemas/IArrayIIdentified",
              },
              {
                $ref: "#/components/schemas/ITupleIIdentified",
              },
              {
                $ref: "#/components/schemas/IOneOfIIdentified",
              },
              {
                $ref: "#/components/schemas/IReferenceIIdentified",
              },
              {
                $ref: "#/components/schemas/IUnknownIIdentified",
              },
              {
                $ref: "#/components/schemas/INullOnlyIIdentified",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        "IJsonComponents.IObject": {
          type: "object",
          properties: {
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["object"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            properties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
            },
            patternProperties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
            },
            additionalProperties: {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            required: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                "x-typia-required": false,
                "x-typia-optional": true,
                type: "string",
              },
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-patternProperties": {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
            },
            "x-typia-additionalProperties": {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          nullable: false,
          required: ["type", "properties"],
          "x-typia-jsDocTags": [],
        },
        RecordstringIJsonSchema: {
          type: "object",
          properties: {},
          nullable: false,
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          "x-typia-additionalProperties": {
            $ref: "#/components/schemas/IJsonSchema",
          },
          additionalProperties: {
            $ref: "#/components/schemas/IJsonSchema",
          },
        },
        IEnumerationstringIIdentified: {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "string",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["string"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IEnumerationnumberIIdentified: {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "number",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["number"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IEnumerationbooleanIIdentified: {
          type: "object",
          properties: {
            enum: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "boolean",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["boolean"],
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IBooleanIIdentified: {
          type: "object",
          properties: {
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["boolean"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        INumberIIdentified: {
          type: "object",
          properties: {
            minimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            maximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            exclusiveMinimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            exclusiveMaximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            multipleOf: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["number"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IIntegerIIdentified: {
          type: "object",
          properties: {
            minimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            maximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            exclusiveMinimum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            exclusiveMaximum: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            multipleOf: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["integer"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IStringIIdentified: {
          type: "object",
          properties: {
            minLength: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxLength: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            pattern: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            format: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["string"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IArrayIIdentified: {
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
            },
            minItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            "x-typia-typeTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["array"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["items", "type"],
          "x-typia-jsDocTags": [],
        },
        ITupleIIdentified: {
          type: "object",
          properties: {
            items: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            minItems: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            maxItems: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["array"],
            },
            nullable: {
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["items", "minItems", "type"],
          "x-typia-jsDocTags": [],
        },
        IOneOfIIdentified: {
          type: "object",
          properties: {
            oneOf: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["oneOf"],
          "x-typia-jsDocTags": [],
        },
        IReferenceIIdentified: {
          type: "object",
          properties: {
            $ref: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["$ref"],
          "x-typia-jsDocTags": [],
        },
        IUnknownIIdentified: {
          type: "object",
          properties: {
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
        INullOnlyIIdentified: {
          type: "object",
          properties: {
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["null"],
            },
            deprecated: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            title: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            description: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            "x-typia-jsDocTags": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-optional": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            "x-typia-rest": {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
            $id: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "string",
            },
            $recursiveAnchor: {
              "x-typia-required": false,
              "x-typia-optional": true,
              type: "boolean",
            },
          },
          nullable: false,
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
