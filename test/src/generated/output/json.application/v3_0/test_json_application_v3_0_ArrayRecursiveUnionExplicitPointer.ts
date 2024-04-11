import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_application_v3_0_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    version: "3.0",
    name: "ArrayRecursiveUnionExplicitPointer",
  })({
    version: "3.0",
    components: {
      schemas: {
        ArrayRecursiveUnionExplicitPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ArrayRecursiveUnionExplicitPointer.IBucket": {
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IDirectory",
                },
                {
                  $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IImageFile",
                },
                {
                  $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.ITextFile",
                },
                {
                  $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IZipFile",
                },
                {
                  $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IShortcut",
                },
              ],
            },
          },
          nullable: false,
          required: ["value"],
        },
        "ArrayRecursiveUnionExplicitPointer.IDirectory": {
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
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
              },
            },
            type: {
              type: "string",
              enum: ["directory"],
            },
          },
          nullable: false,
          required: ["id", "name", "path", "children", "type"],
        },
        "ArrayRecursiveUnionExplicitPointer.IImageFile": {
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
            type: {
              type: "string",
              enum: ["file"],
            },
            extension: {
              type: "string",
              enum: ["jpg"],
            },
          },
          nullable: false,
          required: [
            "id",
            "name",
            "path",
            "width",
            "height",
            "url",
            "size",
            "type",
            "extension",
          ],
        },
        "ArrayRecursiveUnionExplicitPointer.ITextFile": {
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
            type: {
              type: "string",
              enum: ["file"],
            },
            extension: {
              type: "string",
              enum: ["txt"],
            },
          },
          nullable: false,
          required: [
            "id",
            "name",
            "path",
            "size",
            "content",
            "type",
            "extension",
          ],
        },
        "ArrayRecursiveUnionExplicitPointer.IZipFile": {
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
            type: {
              type: "string",
              enum: ["file"],
            },
            extension: {
              type: "string",
              enum: ["zip"],
            },
          },
          nullable: false,
          required: [
            "id",
            "name",
            "path",
            "size",
            "count",
            "type",
            "extension",
          ],
        },
        "ArrayRecursiveUnionExplicitPointer.IShortcut": {
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
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
            },
            type: {
              type: "string",
              enum: ["file"],
            },
            extension: {
              type: "string",
              enum: ["lnk"],
            },
          },
          nullable: false,
          required: ["id", "name", "path", "target", "type", "extension"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer",
      },
    ],
  });
