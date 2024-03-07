import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ArrayRecursiveUnionExplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRecursiveUnionExplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionExplicit: {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionExplicit.IBucket": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
          oneOf: [
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
            },
          ],
        },
        "ArrayRecursiveUnionExplicit.IDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
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
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
              },
            },
            type: {
              type: "string",
              enum: ["directory"],
            },
          },
          required: ["id", "name", "path", "children", "type"],
        },
        "ArrayRecursiveUnionExplicit.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
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
        "ArrayRecursiveUnionExplicit.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
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
        "ArrayRecursiveUnionExplicit.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
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
        "ArrayRecursiveUnionExplicit.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
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
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
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
