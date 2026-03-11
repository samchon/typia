import { LlmJson } from "@typia/utils";
import OpenAI from "openai";
import typia, { tags } from "typia";

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number & tags.Minimum<0>;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}

const main = async (): Promise<void> => {
  // Generate structured output interface
  const output = typia.llm.structuredOutput<IMember>();

  // Use schema with OpenAI
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
          schema: output.parameters as any,
        },
      },
    });

  // Parse LLM response with type coercion
  const parsed = output.parse(completion.choices[0].message.content!);
  if (!parsed.success) {
    console.error("Parse failed:", parsed.errors);
    return;
  }

  // Validate the parsed data
  const validated = output.validate(parsed.data);
  if (!validated.success) {
    // Format errors for LLM feedback
    console.error(LlmJson.stringify(validated));
    return;
  }

  console.log("Success:", validated.data);
};
main().catch(console.error);
