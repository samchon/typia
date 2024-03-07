import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayRecursiveUnionExplicitPointer =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
            },
          },
          required: ["value"],
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
            },
          },
          required: ["value"],
        },
        "ArrayRecursiveUnionExplicitPointer.IDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IDirectory",
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
          required: ["id", "name", "path", "children", "type"],
        },
        "ArrayRecursiveUnionExplicitPointer.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IImageFile",
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
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.ITextFile",
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
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IZipFile",
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
          $id: "#/components/schemas/ArrayRecursiveUnionExplicitPointer.IShortcut",
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
          required: ["id", "name", "path", "target", "type", "extension"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
