import { ChatOpenAI } from "@langchain/openai";
import typia, { ILlmStructuredOutput, IValidation } from "typia";

import { TestGlobal } from "../TestGlobal";

interface IMember {
  name: string;
  age: number;
}

const main = async () => {
  const struct: ILlmStructuredOutput<IMember> =
    typia.llm.structuredOutput<IMember>();

  const model = new ChatOpenAI({
    model: "qwen/qwen3.5-35b-a3b",
    apiKey: TestGlobal.getEnvironments().OPENROUTER_API_KEY,
    configuration: {
      baseURL: "https://openrouter.ai/api/v1",
    },
  }).withStructuredOutput(struct.parameters);
  const raw = await model.invoke("Generate a member named John who is 30");

  const coerced: IMember = struct.coerce(raw);
  const result: IValidation<IMember> = struct.validate(coerced);
  console.log(result);
};
main().catch(console.error);
