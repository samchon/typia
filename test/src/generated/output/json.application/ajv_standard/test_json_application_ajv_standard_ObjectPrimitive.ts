import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_json_application_ajv_standard_ObjectPrimitive =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectPrimitive",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPrimitive.IArticle",
      },
    ],
    components: {
      schemas: {
        "ObjectPrimitive.IArticle": {
          $id: "#/components/schemas/ObjectPrimitive.IArticle",
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
          $id: "#/components/schemas/ObjectPrimitive.IFile",
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
          required: ["id", "name", "extension", "url", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
