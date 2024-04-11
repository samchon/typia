import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectPartialAndRequired } from "../../../../structures/ObjectPartialAndRequired";

export const test_json_application_v3_1_ObjectPartialAndRequired =
  _test_json_application({
    version: "3.1",
    name: "ObjectPartialAndRequired",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectPartialAndRequired: {
          $ref: "#/components/schemas/ObjectPartialAndRequired",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPartialAndRequired",
      },
    ],
  });
