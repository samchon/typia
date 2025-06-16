import typia from "typia";

export const schema = {
  description: "Current Type: {@link Special}",
  type: "object",
  properties: {
    type: {
      title: "Unsigned integer",
      description: "Deprecated tags are just used for marking.",
      type: "integer",
      deprecated: true,
    },
    number: {
      title: "You can limit the range of number",
      description: "You can limit the range of number.",
      type: "number",
      exclusiveMinimum: 19,
      maximum: 100,
    },
    string: {
      title: "You can limit the length of string",
      description:
        "You can limit the length of string.\n\nAlso, multiple range conditions are also possible.",
      oneOf: [
        {
          type: "string",
          minLength: 3,
          maxLength: 24,
        },
        {
          type: "string",
          minLength: 40,
          maxLength: 100,
        },
      ],
    },
    pattern: {
      title: "You can limit the pattern of string",
      description: "You can limit the pattern of string.",
      type: "string",
      pattern: "^[a-z]+$",
    },
    format: {
      title: "You can limit the format of string",
      description: "You can limit the format of string.",
      oneOf: [
        {
          type: "null",
        },
        {
          type: "string",
          format: "date-time",
        },
      ],
    },
    array: {
      title: "In the Array case, possible to restrict its elements",
      description: "In the Array case, possible to restrict its elements.",
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
      minItems: 3,
    },
  },
  required: ["type", "string", "pattern", "format", "array"],
};
