import { generateText } from "ai";
import { MockLanguageModelV1 } from "ai/test";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_generate_text_validation_error =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that returns invalid tool call arguments
    const mockModel = new MockLanguageModelV1({
      doGenerate: async () => ({
        rawCall: { rawPrompt: null, rawSettings: {} },
        finishReason: "tool-calls",
        usage: { promptTokens: 10, completionTokens: 5 },
        toolCalls: [
          {
            toolCallType: "function",
            toolCallId: "call-1",
            toolName: "calculator_add",
            // Invalid: x should be number, not string
            args: JSON.stringify({ x: "not a number", y: 5 }),
          },
        ],
      }),
    });

    // 4. Call generateText with our tools and mock model
    const result = await generateText({
      model: mockModel,
      tools,
      prompt: "What is 10 + 5?",
    });

    // 5. Verify the tool was called
    const toolCalls = result.toolCalls as Array<unknown>;
    TestValidator.equals("should have 1 tool call", toolCalls.length, 1);

    // 6. Verify tool result contains validation error
    const toolResults = result.toolResults as Array<{ result: unknown }>;
    TestValidator.equals("should have 1 tool result", toolResults.length, 1);

    const toolResult = toolResults[0]!.result as {
      error: boolean;
      message: string;
    };
    TestValidator.equals("result should be error", toolResult.error, true);
    TestValidator.predicate(
      "error message should contain validation failure",
      () => toolResult.message.includes("```json"),
    );
    TestValidator.predicate(
      "error message should indicate type error",
      () => toolResult.message.includes("number"),
    );
  };
