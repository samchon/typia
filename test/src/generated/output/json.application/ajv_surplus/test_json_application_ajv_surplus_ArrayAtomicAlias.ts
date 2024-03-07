import typia from "typia";
import { ArrayAtomicAlias } from "../../../../structures/ArrayAtomicAlias";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_surplus_ArrayAtomicAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayAtomicAlias",
  })({
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
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ArrayAtomicAlias.Aliasnumber",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              $ref: "#/components/schemas/ArrayAtomicAlias.Aliasstring",
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
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
    surplus: true,
  });
