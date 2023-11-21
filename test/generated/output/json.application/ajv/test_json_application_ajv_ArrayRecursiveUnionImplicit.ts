import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_ajv_ArrayRecursiveUnionImplicit =
  _test_json_application("ajv")("ArrayRecursiveUnionImplicit")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionImplicit: {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionImplicit.IBucket": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
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
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
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
          required: ["id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
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
          required: ["access", "id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
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
          required: ["id", "name", "path", "width", "height", "url", "size"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
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
          required: ["id", "name", "path", "size", "content"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
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
          required: ["id", "name", "path", "size", "count"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
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
          required: ["id", "name", "path", "target"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
