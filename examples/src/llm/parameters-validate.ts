import OpenAI from "openai";
import typia, { IValidation, tags } from "typia";

interface IMember {
  email: string & tags.Format<"email">;
  name: string;
  age: number;
  hobbies: string[];
  joined_at: string & tags.Format<"date">;
}

const step = async (
  failure?: IValidation.IFailure | undefined,
): Promise<IValidation<IMember>> => {
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
        ...(failure
          ? [
              {
                role: "system",
                content: [
                  "You A.I. agent had taken a mistak that",
                  "returning wrong typed structured data.",
                  "",
                  "Here is the detailed list of type errors.",
                  "Review and correct them at the next step.",
                  "",
                  "```json",
                  JSON.stringify(failure.errors, null, 2),
                  "```",
                ].join("\n"),
              } satisfies OpenAI.ChatCompletionSystemMessageParam,
            ]
          : []),
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "member",
          schema: typia.llm.parameters<IMember>() as any,
        },
      },
    });
  const member: IMember = JSON.parse(completion.choices[0].message.content!);
  return typia.validate(member);
};

const main = async (): Promise<void> => {
  let result: IValidation<IMember> | undefined = undefined;
  for (let i: number = 0; i < 2; ++i) {
    if (result && result.success === true) break;
    result = await step(result);
  }
  console.log(result);
};
main().catch(console.error);
