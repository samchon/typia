import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_json_application_v3_0_UltimateUnion = _test_json_application({
  version: "3.0",
  name: "UltimateUnion",
})({
  version: "3.0",
  components: {
    schemas: {
      UltimateUnion: {
        type: "array",
        items: {
          $ref: "#/components/schemas/IJsonApplication.IV3_1",
        },
      },
      "IJsonApplication.IV3_1": {
        type: "object",
        properties: {
          version: {
            type: "string",
            enum: ["3.1"],
          },
          components: {
            $ref: "#/components/schemas/OpenApi.IComponents",
          },
          schemas: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OpenApi.IJsonSchema",
            },
          },
        },
        nullable: false,
        required: ["version", "components", "schemas"],
      },
      "OpenApi.IComponents": {
        type: "object",
        properties: {
          schemas: {
            $ref: "#/components/schemas/RecordstringOpenApi.IJsonSchema",
          },
          securitySchemes: {
            $ref: "#/components/schemas/RecordstringOpenApi.ISecurityScheme",
          },
        },
        nullable: false,
        required: ["schemas"],
      },
      "RecordstringOpenApi.IJsonSchema": {
        type: "object",
        properties: {},
        nullable: false,
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          $ref: "#/components/schemas/OpenApi.IJsonSchema",
        },
      },
      "OpenApi.IJsonSchema": {
        oneOf: [
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
          },
          {
            $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
          },
        ],
      },
      "OpenApi.IJsonSchema.IConstant": {
        type: "object",
        properties: {
          const: {
            oneOf: [
              {
                type: "string",
              },
              {
                type: "number",
              },
              {
                type: "boolean",
              },
            ],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["const"],
      },
      "OpenApi.IJsonSchema.IBoolean": {
        type: "object",
        properties: {
          default: {
            type: "boolean",
          },
          type: {
            type: "string",
            enum: ["boolean"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IInteger": {
        type: "object",
        properties: {
          exclusiveMinimum: {
            type: "boolean",
          },
          exclusiveMaximum: {
            type: "boolean",
          },
          type: {
            type: "string",
            enum: ["integer"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.IJsonSchema.INumber": {
        type: "object",
        properties: {
          default: {
            type: "number",
          },
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
          type: {
            type: "string",
            enum: ["number"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IString": {
        type: "object",
        properties: {
          contentMediaType: {
            type: "string",
          },
          default: {
            type: "string",
          },
          enum: {
            type: "array",
            items: {
              type: "string",
            },
          },
          format: {
            type: "string",
          },
          pattern: {
            type: "string",
          },
          type: {
            type: "string",
            enum: ["string"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IArray": {
        type: "object",
        properties: {
          items: {
            $ref: "#/components/schemas/OpenApi.IJsonSchema",
          },
          type: {
            type: "string",
            enum: ["array"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["items", "type"],
      },
      "OpenApi.IJsonSchema.ITuple": {
        type: "object",
        properties: {
          prefixItems: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OpenApi.IJsonSchema",
            },
          },
          additionalItems: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
              },
            ],
          },
          type: {
            type: "string",
            enum: ["array"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["prefixItems", "additionalItems", "type"],
      },
      "OpenApi.IJsonSchema.IObject": {
        type: "object",
        properties: {
          properties: {
            $ref: "#/components/schemas/RecordstringOpenApi.IJsonSchema",
          },
          additionalProperties: {
            oneOf: [
              {
                type: "boolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IOneOf",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
              },
              {
                $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
              },
            ],
          },
          required: {
            type: "array",
            items: {
              type: "string",
            },
          },
          type: {
            type: "string",
            enum: ["object"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.IJsonSchema.IReferencestring": {
        type: "object",
        properties: {
          $ref: {
            type: "string",
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["$ref"],
      },
      "OpenApi.IJsonSchema.IOneOf": {
        type: "object",
        properties: {
          oneOf: {
            type: "array",
            items: {
              oneOf: [
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IConstant",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IReferencestring",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.IUnknown",
                },
                {
                  $ref: "#/components/schemas/OpenApi.IJsonSchema.INull",
                },
              ],
            },
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["oneOf"],
      },
      "OpenApi.IJsonSchema.IUnknown": {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
      },
      "OpenApi.IJsonSchema.INull": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["null"],
          },
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          deprecated: {
            type: "boolean",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "RecordstringOpenApi.ISecurityScheme": {
        type: "object",
        properties: {},
        nullable: false,
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          $ref: "#/components/schemas/OpenApi.ISecurityScheme",
        },
      },
      "OpenApi.ISecurityScheme": {
        oneOf: [
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IApiKey",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IHttpBasic",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IHttpBearer",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2",
          },
          {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOpenId",
          },
        ],
      },
      "OpenApi.ISecurityScheme.IApiKey": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["apiKey"],
          },
          in: {
            type: "string",
            enum: ["header", "query", "cookie"],
          },
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        nullable: false,
        required: ["type"],
      },
      "OpenApi.ISecurityScheme.IHttpBasic": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["http"],
          },
          scheme: {
            type: "string",
            enum: ["basic"],
          },
          description: {
            type: "string",
          },
        },
        nullable: false,
        required: ["type", "scheme"],
      },
      "OpenApi.ISecurityScheme.IHttpBearer": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["http"],
          },
          scheme: {
            type: "string",
            enum: ["bearer"],
          },
          bearerFormat: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        nullable: false,
        required: ["type", "scheme"],
      },
      "OpenApi.ISecurityScheme.IOAuth2": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["oauth2"],
          },
          flows: {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2.IFlowSet",
          },
          description: {
            type: "string",
          },
        },
        nullable: false,
        required: ["type", "flows"],
      },
      "OpenApi.ISecurityScheme.IOAuth2.IFlowSet": {
        type: "object",
        properties: {
          authorizationCode: {
            $ref: "#/components/schemas/OpenApi.ISecurityScheme.IOAuth2.IFlow",
          },
          implicit: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowtokenUrl",
          },
          password: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl",
          },
          clientCredentials: {
            $ref: "#/components/schemas/OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl",
          },
        },
        nullable: false,
      },
      "OpenApi.ISecurityScheme.IOAuth2.IFlow": {
        type: "object",
        properties: {
          authorizationUrl: {
            type: "string",
          },
          tokenUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
        nullable: false,
      },
      Recordstringstring: {
        type: "object",
        properties: {},
        nullable: false,
        description: "Construct a type with a set of properties K of type T",
        additionalProperties: {
          type: "string",
        },
      },
      "OmitOpenApi.ISecurityScheme.IOAuth2.IFlowtokenUrl": {
        type: "object",
        properties: {
          authorizationUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
        nullable: false,
        description:
          "Construct a type with the properties of T except for those in type K.",
      },
      "OmitOpenApi.ISecurityScheme.IOAuth2.IFlowauthorizationUrl": {
        type: "object",
        properties: {
          tokenUrl: {
            type: "string",
          },
          refreshUrl: {
            type: "string",
          },
          scopes: {
            $ref: "#/components/schemas/Recordstringstring",
          },
        },
        nullable: false,
        description:
          "Construct a type with the properties of T except for those in type K.",
      },
      "OpenApi.ISecurityScheme.IOpenId": {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["openIdConnect"],
          },
          openIdConnectUrl: {
            type: "string",
          },
          description: {
            type: "string",
          },
        },
        nullable: false,
        required: ["type", "openIdConnectUrl"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/UltimateUnion",
    },
  ],
});
