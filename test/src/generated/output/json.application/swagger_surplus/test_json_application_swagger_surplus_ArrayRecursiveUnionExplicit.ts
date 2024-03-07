import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ArrayRecursiveUnionExplicit =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
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
          nullable: false,
          required: ["id", "name", "path", "children", "type"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicit.IImageFile": {
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
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
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
          nullable: false,
          required: ["id", "name", "path", "target", "type", "extension"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
