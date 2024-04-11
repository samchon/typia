import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_v3_1_ClassGetter = _test_json_application({
  version: "3.1",
  name: "ClassGetter",
})({
  version: "3.1",
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
            oneOf: [
              {
                type: "null",
              },
              {
                type: "boolean",
              },
            ],
          },
        },
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
