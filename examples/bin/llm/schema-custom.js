import typia from "typia";

export const schema = {
  description: "Current Type: {@link IAccount}",
  type: "object",
  properties: {
    code: {
      "x-placeholder": "Write you account code please",
      type: "string",
    },
    balance: {
      "x-monetary": "dollar",
      type: "number",
    },
  },
  required: ["code", "balance"],
};
