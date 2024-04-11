import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../../structures/ArrayAtomicAlias";

export const test_json_application_v3_0_ArrayAtomicAlias =
  _test_json_application({
    version: "3.0",
    name: "ArrayAtomicAlias",
  })({
    version: "3.0",
    components: {
      schemas: {
        ArrayAtomicAlias: {
          type: "array",
          items: {
            oneOf: [
              {
                $ref: "#/components/schemas/ArrayAtomicAlias.Aliasboolean",
              },
              {
                $ref: "#/components/schemas/ArrayAtomicAlias.Aliasnumber",
              },
              {
                $ref: "#/components/schemas/ArrayAtomicAlias.Aliasstring",
              },
            ],
          },
          minItems: 3,
          maxItems: 3,
        },
        "ArrayAtomicAlias.Aliasboolean": {
          type: "array",
          items: {
            type: "boolean",
          },
        },
        "ArrayAtomicAlias.Aliasnumber": {
          type: "array",
          items: {
            type: "number",
          },
        },
        "ArrayAtomicAlias.Aliasstring": {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAtomicAlias",
      },
    ],
  });
