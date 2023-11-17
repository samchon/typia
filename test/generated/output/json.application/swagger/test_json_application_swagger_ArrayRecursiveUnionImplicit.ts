import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_swagger_ArrayRecursiveUnionImplicit =
  _test_json_application("swagger")("ArrayRecursiveUnionImplicit")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionImplicit: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionImplicit.IBucket": {
          oneOf: [
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
            },
          ],
        },
        "ArrayRecursiveUnionImplicit.IDirectory": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            children: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          nullable: false,
          required: ["id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
          type: "object",
          properties: {
            access: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["read", "write"],
            },
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            children: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          nullable: false,
          required: ["access", "id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            width: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            height: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            url: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "width", "height", "url", "size"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            content: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "size", "content"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            count: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "size", "count"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
            },
          },
          nullable: false,
          required: ["id", "name", "path", "target"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
