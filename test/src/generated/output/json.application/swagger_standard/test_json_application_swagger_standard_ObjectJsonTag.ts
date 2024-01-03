import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";

export const test_json_application_swagger_standard_ObjectJsonTag =
  _test_json_application({
    purpose: "swagger",
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
          nullable: false,
          required: ["vulnerable", "description", "title", "complicate_title"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
