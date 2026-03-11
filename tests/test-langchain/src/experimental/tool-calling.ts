import { ChatOpenAI } from "@langchain/openai";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { TestGlobal } from "../TestGlobal";

class Calculator {
  /** Add two numbers. */
  add(input: { a: number; b: number }): { value: number } {
    return { value: input.a + input.b };
  }

  /** Subtract two numbers. */
  subtract(input: { a: number; b: number }): { value: number } {
    return { value: input.a - input.b };
  }

  /** Multiply two numbers. */
  multiply(input: { a: number; b: number }): { value: number } {
    return { value: input.a * input.b };
  }
}

const main = async () => {
  const tools = toLangChainTools({
    controllers: [
      typia.llm.controller<Calculator>("calculator", new Calculator()),
    ],
    prefix: false,
  });

  const llm = new ChatOpenAI({
    model: "qwen/qwen3.5-35b-a3b",
    apiKey: TestGlobal.getEnvironments().OPENROUTER_API_KEY,
    configuration: {
      baseURL: "https://openrouter.ai/api/v1",
    },
  });
  const modelWithTools = llm.bindTools(tools);
  const response = await modelWithTools.invoke("What is 10 + 5?");

  console.log("=== Tool Calls ===");
  for (const toolCall of response.tool_calls ?? []) {
    console.log(`Tool: ${toolCall.name}`);
    console.log(`Args: ${JSON.stringify(toolCall.args)}`);

    const tool = tools.find((t) => t.name === toolCall.name);
    if (tool) {
      const result = await tool.invoke(toolCall.args);
      console.log(`Result: ${result}`);
    }
  }
};
main().catch(console.error);
