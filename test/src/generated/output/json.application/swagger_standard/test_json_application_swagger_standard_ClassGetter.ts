import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_swagger_standard_ClassGetter =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ClassGetter",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ClassGetter.Person",
      },
    ],
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
    purpose: "swagger",
    surplus: false,
  });
