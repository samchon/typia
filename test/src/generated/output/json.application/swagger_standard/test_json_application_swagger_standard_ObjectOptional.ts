import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";

export const test_json_application_swagger_standard_ObjectOptional =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectOptional",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectOptional",
      },
    ],
    components: {
      schemas: {
        ObjectOptional: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            email: {
              type: "string",
            },
            sequence: {
              type: "number",
            },
          },
          nullable: false,
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
