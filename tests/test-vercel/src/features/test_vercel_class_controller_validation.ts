import type { Tool } from "ai";
import { TestValidator } from "@nestia/e2e";
import { ILlmController, IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_class_controller_validation =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Convert to Vercel tools
    const tools: Record<string, Tool> = toVercelTools({
      controllers: [controller],
    });

    // 3. Test validation failure: wrong type (string instead of number)
    const addTool: Tool = tools["calculator_add"]!;
    const result: unknown = await addTool.execute!(
      { x: "not a number", y: 5 },
      { toolCallId: "test-1", messages: [], abortSignal: undefined as any },
    );

    // 4. Verify the result contains validation error
    const coerced: unknown = LlmJson.coerce(
      { x: "not a number", y: 5 },
      controller.application.functions.find((f) => f.name === "add")!.parameters,
    );
    const expected: IValidation = typia.validate<Calculator.IProps>(coerced);
    if (expected.success === true)
      throw new Error("Expected validation to fail, but it succeeded.");

    const expectedMessage: string = LlmJson.stringify(expected);

    TestValidator.predicate("result should be an error object", () => {
      const res = result as { error?: boolean; message?: string };
      return res.error === true && typeof res.message === "string";
    });

    TestValidator.predicate("error message should contain validation info", () => {
      const res = result as { error: boolean; message: string };
      return res.message === expectedMessage;
    });
  };
