import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_json_application_ajv_standard_UltimateUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "UltimateUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/UltimateUnion",
      },
    ],
    components: {
      schemas: {
        UltimateUnion: {
          $id: "#/components/schemas/UltimateUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/IJsonApplication",
          },
        },
        IJsonApplication: {
          $id: "#/components/schemas/IJsonApplication",
          type: "object",
          properties: {
            schemas: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            components: {
              $ref: "#/components/schemas/IJsonComponents",
            },
            purpose: {
              type: "string",
              enum: ["ajv", "swagger"],
            },
            surplus: {
              type: "boolean",
            },
          },
          required: ["schemas", "components", "purpose", "surplus"],
        },
        IJsonSchema: {
          $id: "#/components/schemas/IJsonSchema",
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
              $ref: "#/components/schemas/IJsonSchema.IObject",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IReference",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.INullOnly",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IOneOf",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IUnknown",
            },
          ],
        },
        "IJsonSchema.IEnumerationboolean": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationboolean",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "boolean",
              },
            },
            type: {
              type: "string",
              enum: ["boolean"],
            },
            default: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        IJsDocTagInfo: {
          $id: "#/components/schemas/IJsDocTagInfo",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            text: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo.IText",
              },
            },
          },
          required: ["name"],
        },
        "IJsDocTagInfo.IText": {
          $id: "#/components/schemas/IJsDocTagInfo.IText",
          type: "object",
          properties: {
            text: {
              type: "string",
            },
            kind: {
              type: "string",
            },
          },
          required: ["text", "kind"],
        },
        "IJsonSchema.IEnumerationnumber": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationnumber",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "number",
              },
            },
            type: {
              type: "string",
              enum: ["number"],
            },
            default: {
              type: "number",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        "IJsonSchema.IEnumerationstring": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationstring",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "string",
              },
            },
            type: {
              type: "string",
              enum: ["string"],
            },
            default: {
              type: "string",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        "IJsonSchema.IBoolean": {
          $id: "#/components/schemas/IJsonSchema.IBoolean",
          type: "object",
          properties: {
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "boolean",
            },
            type: {
              type: "string",
              enum: ["boolean"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        IMetadataTypeTag: {
          $id: "#/components/schemas/IMetadataTypeTag",
          type: "object",
          properties: {
            target: {
              type: "string",
              enum: ["array", "bigint", "boolean", "number", "string"],
            },
            name: {
              type: "string",
            },
            kind: {
              type: "string",
            },
            exclusive: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              ],
            },
            value: {},
            validate: {
              type: "string",
            },
            schema: {
              $ref: "#/components/schemas/object",
            },
          },
          required: ["target", "name", "kind", "exclusive"],
        },
        object: {
          $id: "#/components/schemas/object",
          type: "object",
          properties: {},
        },
        "IJsonSchema.IInteger": {
          $id: "#/components/schemas/IJsonSchema.IInteger",
          type: "object",
          properties: {
            minimum: {
              type: "integer",
            },
            maximum: {
              type: "integer",
            },
            exclusiveMinimum: {
              type: "boolean",
            },
            exclusiveMaximum: {
              type: "boolean",
            },
            multipleOf: {
              type: "integer",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["integer"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        "IJsonSchema.INumber": {
          $id: "#/components/schemas/IJsonSchema.INumber",
          type: "object",
          properties: {
            minimum: {
              type: "number",
            },
            maximum: {
              type: "number",
            },
            exclusiveMinimum: {
              type: "boolean",
            },
            exclusiveMaximum: {
              type: "boolean",
            },
            multipleOf: {
              type: "number",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["number"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        "IJsonSchema.IString": {
          $id: "#/components/schemas/IJsonSchema.IString",
          type: "object",
          properties: {
            minLength: {
              type: "integer",
            },
            maxLength: {
              type: "integer",
            },
            pattern: {
              type: "string",
            },
            format: {
              type: "string",
            },
            contentMediaType: {
              type: "string",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "string",
            },
            type: {
              type: "string",
              enum: ["string"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        "IJsonSchema.IArray": {
          $id: "#/components/schemas/IJsonSchema.IArray",
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
            },
            minItems: {
              type: "integer",
            },
            maxItems: {
              type: "integer",
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            type: {
              type: "string",
              enum: ["array"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["items", "type"],
        },
        "IJsonSchema.ITuple": {
          $id: "#/components/schemas/IJsonSchema.ITuple",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            minItems: {
              type: "integer",
            },
            maxItems: {
              type: "integer",
            },
            type: {
              type: "string",
              enum: ["array"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["items", "minItems", "type"],
        },
        "IJsonSchema.IObject": {
          $id: "#/components/schemas/IJsonSchema.IObject",
          type: "object",
          properties: {
            properties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
            },
            required: {
              type: "array",
              items: {
                type: "string",
              },
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
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
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
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
            },
            type: {
              type: "string",
              enum: ["object"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["properties", "type"],
        },
        RecordstringIJsonSchema: {
          $id: "#/components/schemas/RecordstringIJsonSchema",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          additionalProperties: {
            $ref: "#/components/schemas/IJsonSchema",
          },
        },
        "IJsonSchema.IReference": {
          $id: "#/components/schemas/IJsonSchema.IReference",
          type: "object",
          properties: {
            $ref: {
              type: "string",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["$ref"],
        },
        "IJsonSchema.INullOnly": {
          $id: "#/components/schemas/IJsonSchema.INullOnly",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["null"],
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        "IJsonSchema.IOneOf": {
          $id: "#/components/schemas/IJsonSchema.IOneOf",
          type: "object",
          properties: {
            oneOf: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
          required: ["oneOf"],
        },
        "IJsonSchema.IUnknown": {
          $id: "#/components/schemas/IJsonSchema.IUnknown",
          type: "object",
          properties: {
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
          },
        },
        IJsonComponents: {
          $id: "#/components/schemas/IJsonComponents",
          type: "object",
          properties: {
            schemas: {
              $ref: "#/components/schemas/RecordstringIJsonComponents.IAlias",
            },
          },
        },
        "RecordstringIJsonComponents.IAlias": {
          $id: "#/components/schemas/RecordstringIJsonComponents.IAlias",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          additionalProperties: {
            $ref: "#/components/schemas/IJsonComponents.IAlias",
          },
        },
        "IJsonComponents.IAlias": {
          $id: "#/components/schemas/IJsonComponents.IAlias",
          oneOf: [
            {
              $ref: "#/components/schemas/IEnumerationbooleanIIdentified",
            },
            {
              $ref: "#/components/schemas/IEnumerationnumberIIdentified",
            },
            {
              $ref: "#/components/schemas/IEnumerationstringIIdentified",
            },
            {
              $ref: "#/components/schemas/IBooleanIIdentified",
            },
            {
              $ref: "#/components/schemas/IIntegerIIdentified",
            },
            {
              $ref: "#/components/schemas/INumberIIdentified",
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
              $ref: "#/components/schemas/IObjectIIdentified",
            },
            {
              $ref: "#/components/schemas/IReferenceIIdentified",
            },
            {
              $ref: "#/components/schemas/INullOnlyIIdentified",
            },
            {
              $ref: "#/components/schemas/IOneOfIIdentified",
            },
            {
              $ref: "#/components/schemas/IUnknownIIdentified",
            },
          ],
        },
        IEnumerationbooleanIIdentified: {
          $id: "#/components/schemas/IEnumerationbooleanIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "boolean",
              },
            },
            type: {
              type: "string",
              enum: ["boolean"],
            },
            default: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        IEnumerationnumberIIdentified: {
          $id: "#/components/schemas/IEnumerationnumberIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "number",
              },
            },
            type: {
              type: "string",
              enum: ["number"],
            },
            default: {
              type: "number",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        IEnumerationstringIIdentified: {
          $id: "#/components/schemas/IEnumerationstringIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "string",
              },
            },
            type: {
              type: "string",
              enum: ["string"],
            },
            default: {
              type: "string",
            },
            title: {
              type: "string",
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["enum", "type"],
        },
        IBooleanIIdentified: {
          $id: "#/components/schemas/IBooleanIIdentified",
          type: "object",
          properties: {
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "boolean",
            },
            type: {
              type: "string",
              enum: ["boolean"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        IIntegerIIdentified: {
          $id: "#/components/schemas/IIntegerIIdentified",
          type: "object",
          properties: {
            minimum: {
              type: "integer",
            },
            maximum: {
              type: "integer",
            },
            exclusiveMinimum: {
              type: "boolean",
            },
            exclusiveMaximum: {
              type: "boolean",
            },
            multipleOf: {
              type: "integer",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["integer"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        INumberIIdentified: {
          $id: "#/components/schemas/INumberIIdentified",
          type: "object",
          properties: {
            minimum: {
              type: "number",
            },
            maximum: {
              type: "number",
            },
            exclusiveMinimum: {
              type: "boolean",
            },
            exclusiveMaximum: {
              type: "boolean",
            },
            multipleOf: {
              type: "number",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "number",
            },
            type: {
              type: "string",
              enum: ["number"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        IStringIIdentified: {
          $id: "#/components/schemas/IStringIIdentified",
          type: "object",
          properties: {
            minLength: {
              type: "integer",
            },
            maxLength: {
              type: "integer",
            },
            pattern: {
              type: "string",
            },
            format: {
              type: "string",
            },
            contentMediaType: {
              type: "string",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            default: {
              type: "string",
            },
            type: {
              type: "string",
              enum: ["string"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        IArrayIIdentified: {
          $id: "#/components/schemas/IArrayIIdentified",
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
            },
            minItems: {
              type: "integer",
            },
            maxItems: {
              type: "integer",
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
            },
            type: {
              type: "string",
              enum: ["array"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["items", "type"],
        },
        ITupleIIdentified: {
          $id: "#/components/schemas/ITupleIIdentified",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            minItems: {
              type: "integer",
            },
            maxItems: {
              type: "integer",
            },
            type: {
              type: "string",
              enum: ["array"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["items", "minItems", "type"],
        },
        IObjectIIdentified: {
          $id: "#/components/schemas/IObjectIIdentified",
          type: "object",
          properties: {
            properties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
            },
            required: {
              type: "array",
              items: {
                type: "string",
              },
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
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
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
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
            },
            type: {
              type: "string",
              enum: ["object"],
            },
            nullable: {
              type: "boolean",
              title: "Only when swagger mode",
              description: "Only when swagger mode.",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["properties", "type"],
        },
        IReferenceIIdentified: {
          $id: "#/components/schemas/IReferenceIIdentified",
          type: "object",
          properties: {
            $ref: {
              type: "string",
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["$ref"],
        },
        INullOnlyIIdentified: {
          $id: "#/components/schemas/INullOnlyIIdentified",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["null"],
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["type"],
        },
        IOneOfIIdentified: {
          $id: "#/components/schemas/IOneOfIIdentified",
          type: "object",
          properties: {
            oneOf: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
            },
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
          required: ["oneOf"],
        },
        IUnknownIIdentified: {
          $id: "#/components/schemas/IUnknownIIdentified",
          type: "object",
          properties: {
            deprecated: {
              type: "boolean",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
            },
            "x-typia-required": {
              type: "boolean",
            },
            "x-typia-optional": {
              type: "boolean",
            },
            "x-typia-rest": {
              type: "boolean",
            },
            $id: {
              type: "string",
            },
            $recursiveAnchor: {
              type: "boolean",
            },
          },
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
