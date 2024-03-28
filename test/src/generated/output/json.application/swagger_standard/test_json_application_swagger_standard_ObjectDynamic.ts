import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_json_application_swagger_standard_ObjectDynamic =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectDynamic",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectDynamic",
      },
    ],
    components: {
      schemas: {
        ObjectDynamic: {
          type: "object",
          properties: {},
          nullable: false,
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });
