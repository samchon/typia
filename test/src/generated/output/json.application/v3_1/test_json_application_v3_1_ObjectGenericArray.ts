import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericArray } from "../../../../structures/ObjectGenericArray";

export const test_json_application_v3_1_ObjectGenericArray =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericArray",
  })({
    version: "3.1",
    components: {
      schemas: {
        ObjectGenericArray: {
          $ref: "#/components/schemas/ObjectGenericArray",
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericArray",
      },
    ],
  });
