import { generateText } from "ai";
import { MockLanguageModelV1 } from "ai/test";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_generate_text_with_tool_call =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools = toVercelTools({
      controllers: [controller],
    });

    // 3. Create a mock model that returns a tool call
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
            args: JSON.stringify({ x: 10, y: 5 }),
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

    // 5. Verify the tool was called and returned correct result
    const toolCalls = result.toolCalls as Array<{
      toolName: string;
      args: unknown;
    }>;
    TestValidator.equals("should have 1 tool call", toolCalls.length, 1);
    TestValidator.equals(
      "tool name should be calculator_add",
      toolCalls[0]!.toolName,
      "calculator_add",
    );
    TestValidator.equals("tool args should match", toolCalls[0]!.args, {
      x: 10,
      y: 5,
    });

    // 6. Verify tool result
    const toolResults = result.toolResults as Array<{ result: unknown }>;
    TestValidator.equals("should have 1 tool result", toolResults.length, 1);
    TestValidator.equals("tool result should be 15", toolResults[0]!.result, 15);
  };
