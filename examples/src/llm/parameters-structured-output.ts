import OpenAI from "openai";
import typia, { tags } from "typia";

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}

const main = async (): Promise<void> => {
  const client: OpenAI = new OpenAI({
    apiKey: "<YOUR_OPENAI_API_KEY>",
  });
  const completion: OpenAI.ChatCompletion =
    await client.chat.completions.create({
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
          schema: typia.llm.parameters<IMember, "chatgpt">() as any,
        },
      },
    });
  console.log(JSON.parse(completion.choices[0].message.content!));
};
main().catch(console.error);
