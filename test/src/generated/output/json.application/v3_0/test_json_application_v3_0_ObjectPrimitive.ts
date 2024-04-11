import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_json_application_v3_0_ObjectPrimitive =
  _test_json_application({
    version: "3.0",
    name: "ObjectPrimitive",
  })({
    version: "3.0",
    components: {
      schemas: {
        "ObjectPrimitive.IArticle": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            extension: {
              type: "string",
              enum: ["txt", "md", "html"],
            },
            title: {
              type: "string",
            },
            body: {
              type: "string",
            },
            files: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPrimitive.IFile",
              },
            },
            secret: {
              type: "boolean",
            },
            created_at: {
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
        },
        "ObjectPrimitive.IFile": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            extension: {
              type: "string",
            },
            url: {
              type: "string",
            },
            created_at: {
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name", "extension", "url", "created_at"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPrimitive.IArticle",
      },
    ],
  });
