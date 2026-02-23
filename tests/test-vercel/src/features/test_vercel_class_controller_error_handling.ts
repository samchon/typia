import type { Tool } from "ai";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_class_controller_error_handling =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Test divide by zero (throws an error)
    const divideTool: Tool = tools["calculator_divide"]!;
    const result: unknown = await divideTool.execute!(
      { x: 10, y: 0 },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );

    // 4. Verify the result contains error
    TestValidator.predicate("result should be an error object", () => {
      const res = result as { error?: boolean; message?: string };
      return res.error === true && typeof res.message === "string";
    });

    TestValidator.predicate("error message should contain division by zero", () => {
      const res = result as { error: boolean; message: string };
      return res.message.includes("Division by zero");
    });
  };
