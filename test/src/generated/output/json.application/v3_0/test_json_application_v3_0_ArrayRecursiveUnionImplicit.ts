import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_v3_0_ArrayRecursiveUnionImplicit =
  _test_json_application({
    version: "3.0",
    name: "ArrayRecursiveUnionImplicit",
  })({
    version: "3.0",
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
          nullable: false,
          required: ["id", "name", "path", "children"],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
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
          nullable: false,
          required: ["access", "id", "name", "path", "children"],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
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
          nullable: false,
          required: ["id", "name", "path", "width", "height", "url", "size"],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
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
          nullable: false,
          required: ["id", "name", "path", "size", "content"],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
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
          nullable: false,
          required: ["id", "name", "path", "size", "count"],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
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
          nullable: false,
          required: ["id", "name", "path", "target"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit",
      },
    ],
  });
