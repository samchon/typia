import typia from "typia";

export const SpecialCommentTagSchema = {
  version: "3.1",
  components: {
    schemas: {
      Special: {
        type: "object",
        properties: {
          type: {
            type: "integer",
            deprecated: true,
            title: "Unsigned integer",
            description: "Deprecated tags are just used for marking.",
          },
          number: {
            type: "number",
            exclusiveMinimum: 19,
            maximum: 100,
            title: "You can limit the range of number",
            description: "You can limit the range of number.",
          },
          string: {
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
            title: "You can limit the length of string",
            description:
              "You can limit the length of string.\n\nAlso, multiple range conditions are also possible.",
          },
          pattern: {
            type: "string",
            pattern: "^[a-z]+$",
            title: "You can limit the pattern of string",
            description: "You can limit the pattern of string.",
          },
          format: {
            oneOf: [
              {
                type: "null",
              },
              {
                type: "string",
                format: "date-time",
              },
            ],
            title: "You can limit the format of string",
            description: "You can limit the format of string.",
          },
          array: {
            type: "array",
            items: {
              type: "string",
              format: "uuid",
            },
            minItems: 3,
            title: "In the Array case, possible to restrict its elements",
            description:
              "In the Array case, possible to restrict its elements.",
          },
        },
        required: ["type", "string", "pattern", "format", "array"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/Special",
    },
  ],
};
