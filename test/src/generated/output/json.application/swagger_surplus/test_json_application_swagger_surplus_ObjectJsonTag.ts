import typia from "typia";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_surplus_ObjectJsonTag =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectJsonTag",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectJsonTag",
      },
    ],
    components: {
      schemas: {
        ObjectJsonTag: {
          type: "object",
          properties: {
            vulnerable: {
              type: "string",
              deprecated: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            description: {
              type: "string",
              title: "Descripted property",
              description: "Descripted property.",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              title: "something",
              description: "Titled property.",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            complicate_title: {
              type: "string",
              title: "something weirdo with {@link something } tag",
              description: "Complicate title.",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["vulnerable", "description", "title", "complicate_title"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
