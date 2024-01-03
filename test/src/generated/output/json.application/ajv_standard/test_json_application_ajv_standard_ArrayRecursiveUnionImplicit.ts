import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_ajv_standard_ArrayRecursiveUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRecursiveUnionImplicit",
  })({
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
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          required: ["id", "name", "path", "children"],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
          type: "object",
          properties: {
            access: {
              type: "string",
              enum: ["read", "write"],
            },
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
            },
          },
          required: ["access", "id", "name", "path", "children"],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            width: {
              type: "number",
            },
            height: {
              type: "number",
            },
            url: {
              type: "string",
            },
            size: {
              type: "number",
            },
          },
          required: ["id", "name", "path", "width", "height", "url", "size"],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            size: {
              type: "number",
            },
            content: {
              type: "string",
            },
          },
          required: ["id", "name", "path", "size", "content"],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            size: {
              type: "number",
            },
            count: {
              type: "number",
            },
          },
          required: ["id", "name", "path", "size", "count"],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            path: {
              type: "string",
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
            },
          },
          required: ["id", "name", "path", "target"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
