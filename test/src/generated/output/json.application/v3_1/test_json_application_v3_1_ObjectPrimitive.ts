import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_json_application_v3_1_ObjectPrimitive =
  _test_json_application({
    version: "3.1",
    name: "ObjectPrimitive",
  })({
    version: "3.1",
    components: {
      schemas: {
        "ObjectPrimitive.IArticle": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            extension: {
              oneOf: [
                {
                  const: "txt",
                },
                {
                  const: "md",
                },
                {
                  const: "html",
                },
              ],
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
