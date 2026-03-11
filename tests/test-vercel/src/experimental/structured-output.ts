import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { toVercelSchema } from "@typia/vercel";
import { generateObject } from "ai";
import typia, { ILlmStructuredOutput, IValidation } from "typia";

import { TestGlobal } from "../TestGlobal";

interface IMember {
  name: string;
  age: number;
}

const main = async () => {
  const struct: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  const openrouter = createOpenAICompatible({
    name: "openrouter",
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: TestGlobal.getEnvironments().OPENROUTER_API_KEY,
  });

  const result = await generateObject({
    model: openrouter("qwen/qwen3.5-35b-a3b"),
    schema: toVercelSchema(struct.parameters),
    prompt: "Generate a member named John who is 30",
  });

  console.log("=== Raw Result ===");
  console.log(result.object);

  const coerced: IMember = struct.coerce(result.object);
  console.log("\n=== Coerced ===");
  console.log(coerced);

  const validated: IValidation<IMember> = struct.validate(coerced);
  console.log("\n=== Validation ===");
  console.log(validated);
};
main().catch(console.error);
