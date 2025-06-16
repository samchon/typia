import typia from "typia";

export const SpecialTypeTagSchema = {
  version: "3.1",
  components: {
    schemas: {
      IAccount: {
        type: "object",
        properties: {
          code: {
            type: "string",
            "x-placeholder": "Write your account code please",
          },
          balance: {
            type: "number",
            "x-monetary": "dollar",
          },
        },
        required: ["code", "balance"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/IAccount",
    },
  ],
};
