import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../../structures/ObjectGenericAlias";

export const test_json_application_ajv_standard_ObjectGenericAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectGenericAlias",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectGenericAlias.Alias",
      },
    ],
    components: {
      schemas: {
        "ObjectGenericAlias.Alias": {
          $id: "#/components/schemas/ObjectGenericAlias.Alias",
          type: "object",
          properties: {
            value: {
              type: "string",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
