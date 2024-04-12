import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_v3_1_ObjectNullable = _test_json_application(
  {
    version: "3.1",
    name: "ObjectNullable",
  },
)({
  version: "3.1",
  components: {
    schemas: {
      ObjectNullable: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectNullable.IProduct",
            },
          },
        },
        required: ["value"],
      },
      "ObjectNullable.IProduct": {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          manufacturer: {
            $ref: "#/components/schemas/ObjectNullable.IManufacturer",
          },
          brand: {
            oneOf: [
              {
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IBrand",
              },
            ],
          },
          similar: {
            oneOf: [
              {
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IBrand",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IManufacturer",
              },
            ],
          },
        },
        required: ["name", "manufacturer", "brand", "similar"],
      },
      "ObjectNullable.IManufacturer": {
        type: "object",
        properties: {
          type: {
            const: "manufacturer",
          },
          name: {
            type: "string",
          },
        },
        required: ["type", "name"],
      },
      "ObjectNullable.IBrand": {
        type: "object",
        properties: {
          type: {
            const: "brand",
          },
          name: {
            type: "string",
          },
        },
        required: ["type", "name"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ObjectNullable",
    },
  ],
});
