import typia from "typia";

const parameters = {
  type: "object",
  properties: {
    email: {
      description: "@format email",
      type: "string",
    },
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
    hobbies: {
      type: "array",
      items: {
        type: "string",
      },
    },
    joined_at: {
      description: "@format date",
      type: "string",
    },
  },
  required: ["email", "name", "age", "hobbies", "joined_at"],
  additionalProperties: false,
  $defs: {},
};
console.log(parameters);
