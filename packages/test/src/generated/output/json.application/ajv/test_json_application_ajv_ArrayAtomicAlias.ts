import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../../structures/ArrayAtomicAlias";

export const test_json_application_ajv_ArrayAtomicAlias =
  _test_json_application("ajv")("ArrayAtomicAlias")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayAtomicAlias",
      },
    ],
    components: {
      schemas: {
        ArrayAtomicAlias: {
          $id: "#/components/schemas/ArrayAtomicAlias",
          type: "array",
          items: [
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
          minItems: 3,
          maxItems: 3,
        },
        "ArrayAtomicAlias.Aliasboolean": {
          $id: "#/components/schemas/ArrayAtomicAlias.Aliasboolean",
          type: "array",
          items: {
            type: "boolean",
          },
        },
        "ArrayAtomicAlias.Aliasnumber": {
          $id: "#/components/schemas/ArrayAtomicAlias.Aliasnumber",
          type: "array",
          items: {
            type: "number",
          },
        },
        "ArrayAtomicAlias.Aliasstring": {
          $id: "#/components/schemas/ArrayAtomicAlias.Aliasstring",
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
    purpose: "ajv",
  });
