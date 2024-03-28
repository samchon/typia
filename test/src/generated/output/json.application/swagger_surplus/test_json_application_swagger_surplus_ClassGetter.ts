import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassGetter } from "../../../../structures/ClassGetter";

export const test_json_application_swagger_surplus_ClassGetter =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
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
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            dead: {
              type: "boolean",
              nullable: true,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "name", "dead"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
