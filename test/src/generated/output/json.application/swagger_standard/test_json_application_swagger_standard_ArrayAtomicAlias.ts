import typia from "typia";
import { ArrayAtomicAlias } from "../../../../structures/ArrayAtomicAlias";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ArrayAtomicAlias =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
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
          "x-typia-tuple": {
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
    purpose: "swagger",
    surplus: false,
  });
