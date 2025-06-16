import OpenAI from "openai";
import typia from "typia";

const main = async () => {
  const client = new OpenAI({
    apiKey: "<YOUR_OPENAI_API_KEY>",
  });
  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          "I am a new member of the community.",
          "",
          "My name is John Doe, and I am 25 years old.",
          "I like playing basketball and reading books,",
          "and joined to this community at 2022-01-01.",
        ].join("\n"),
      },
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "member",
        schema: {
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
        },
      },
    },
  });
  console.log(JSON.parse(completion.choices[0].message.content));
};
main().catch(console.error);
