import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_v3_1_ArrayRecursiveUnionExplicit =
  _test_json_application({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit",
  })({
    version: "3.1",
    components: {
      schemas: {
        ArrayRecursiveUnionExplicit: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionExplicit.IBucket": {
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
              const: "directory",
            },
          },
          required: ["id", "name", "path", "children", "type"],
        },
        "ArrayRecursiveUnionExplicit.IImageFile": {
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
              const: "file",
            },
            extension: {
              const: "jpg",
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
              const: "file",
            },
            extension: {
              const: "txt",
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
              const: "file",
            },
            extension: {
              const: "zip",
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
              const: "file",
            },
            extension: {
              const: "lnk",
            },
          },
          required: ["id", "name", "path", "target", "type", "extension"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit",
      },
    ],
  });
