import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_v3_0_ClassGetter = _test_json_application({
  version: "3.0",
  name: "ClassGetter",
})({
  version: "3.0",
  components: {
    schemas: {
      "ClassGetter.Person": {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          dead: {
            type: "boolean",
            nullable: true,
          },
        },
        nullable: false,
        required: ["id", "name", "dead"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ClassGetter.Person",
    },
  ],
});
