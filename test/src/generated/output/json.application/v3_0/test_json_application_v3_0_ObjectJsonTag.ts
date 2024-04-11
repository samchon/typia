import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";

export const test_json_application_v3_0_ObjectJsonTag = _test_json_application({
  version: "3.0",
  name: "ObjectJsonTag",
})({
  version: "3.0",
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
            title: "Descripted property",
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
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectJsonTag",
    },
  ],
});
