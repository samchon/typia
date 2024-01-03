import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";

export const test_json_application_ajv_standard_ObjectJsonTag =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
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
          $id: "#/components/schemas/ObjectJsonTag",
          type: "object",
          properties: {
            vulnerable: {
              type: "string",
              deprecated: true,
            },
            description: {
              type: "string",
              description: "Descripted property.",
            },
            title: {
              type: "string",
              title: "something",
              description: "Titled property.",
            },
            complicate_title: {
              type: "string",
              title: "something weirdo with {@link something } tag",
              description: "Complicate title.",
            },
          },
          required: ["vulnerable", "description", "title", "complicate_title"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
