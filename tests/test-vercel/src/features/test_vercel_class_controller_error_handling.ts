import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
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
    const divideTool: Tool = tools["divide"]!;
    const result: unknown = await divideTool.execute!(
      { x: 10, y: 0 },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );

    // 4. Verify the result contains error
    TestValidator.predicate("result should be a failure object", () => {
      const res = result as { success?: boolean; error?: string };
      return res.success === false && typeof res.error === "string";
    });

    TestValidator.predicate("error should contain division by zero", () => {
      const res = result as { success: boolean; error: string };
      return res.error.includes("Division by zero");
    });
  };
