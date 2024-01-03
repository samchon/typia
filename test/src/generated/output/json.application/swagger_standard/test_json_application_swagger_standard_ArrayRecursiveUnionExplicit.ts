import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_swagger_standard_ArrayRecursiveUnionExplicit =
  _test_json_application({
    purpose: "swagger",
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
              type: "string",
              enum: ["directory"],
            },
          },
          nullable: false,
          required: ["id", "name", "path", "children", "type"],
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
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
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
