import { generateText } from "ai";
import { MockLanguageModelV1 } from "ai/test";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_generate_text_runtime_error =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that triggers division by zero
    const mockModel = new MockLanguageModelV1({
      doGenerate: async () => ({
        rawCall: { rawPrompt: null, rawSettings: {} },
        finishReason: "tool-calls",
        usage: { promptTokens: 10, completionTokens: 5 },
        toolCalls: [
          {
            toolCallType: "function",
            toolCallId: "call-1",
            toolName: "calculator_divide",
            args: JSON.stringify({ x: 10, y: 0 }), // Division by zero!
          },
        ],
      }),
    });

    // 4. Call generateText with our tools and mock model
    const result = await generateText({
      model: mockModel,
      tools,
      prompt: "Divide 10 by 0",
    });

    // 5. Verify the tool was called
    const toolCalls = result.toolCalls as Array<unknown>;
    TestValidator.equals("should have 1 tool call", toolCalls.length, 1);

    // 6. Verify tool result contains runtime error
    const toolResults = result.toolResults as Array<{ result: unknown }>;
    TestValidator.equals("should have 1 tool result", toolResults.length, 1);

    const toolResult = toolResults[0]!.result as {
      error: boolean;
      message: string;
    };
    TestValidator.equals("result should be error", toolResult.error, true);
    TestValidator.predicate(
      "error message should contain division by zero",
      () => toolResult.message.includes("Division by zero"),
    );
  };
