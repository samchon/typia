import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_json_application_swagger_ObjectPrimitive =
  _test_json_application("swagger")("ObjectPrimitive")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPrimitive.IArticle",
      },
    ],
    components: {
      schemas: {
        "ObjectPrimitive.IArticle": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["txt", "md", "html"],
            },
            title: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            body: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            files: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPrimitive.IFile",
              },
            },
            secret: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
            created_at: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: [
            "id",
            "extension",
            "title",
            "body",
            "files",
            "secret",
            "created_at",
          ],
          "x-typia-jsDocTags": [],
        },
        "ObjectPrimitive.IFile": {
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            url: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            created_at: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name", "extension", "url", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
  });
