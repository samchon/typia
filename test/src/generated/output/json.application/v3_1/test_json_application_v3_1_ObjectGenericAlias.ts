import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../../structures/ObjectGenericAlias";

export const test_json_application_v3_1_ObjectGenericAlias =
  _test_json_application({
    version: "3.1",
    name: "ObjectGenericAlias",
  })({
    version: "3.1",
    components: {
      schemas: {
        "ObjectGenericAlias.Alias": {
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericAlias.Alias",
      },
    ],
  });
