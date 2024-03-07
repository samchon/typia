import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionExplicitPointer",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionExplicitPointer: {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.IBucket": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.IDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IDirectory",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["directory"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "children", "type"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IImageFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            height: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            url: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["file"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["jpg"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
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
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.ITextFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            content: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["file"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["txt"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: [
            "id",
            "name",
            "path",
            "size",
            "content",
            "type",
            "extension",
          ],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IZipFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            count: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["file"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["zip"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: [
            "id",
            "name",
            "path",
            "size",
            "count",
            "type",
            "extension",
          ],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicitPointer.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IShortcut",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IBucket",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["file"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["lnk"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "target", "type", "extension"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
