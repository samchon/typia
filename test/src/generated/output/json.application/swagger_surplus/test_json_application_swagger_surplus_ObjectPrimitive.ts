import typia from "typia";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectPrimitive =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
          type: "object",
          properties: {
            id: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              enum: ["html", "md", "txt"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            body: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            files: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPrimitive.IFile",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            secret: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
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
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            extension: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            url: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "name", "extension", "url", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
