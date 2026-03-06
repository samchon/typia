import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IComplex {
  user: {
    name: string;
    scores: number[];
  };
  metadata: {
    active: boolean;
  };
}

export const test_llm_stringify_mixed_nested_errors = (): void => {
  const valid: IComplex = {
    user: { name: "John", scores: [100, 95, 88] },
    metadata: { active: true },
  };
  (valid.user as { name: unknown }).name = 123;
  (valid.user.scores as unknown[])[1] = "ninety-five";
  (valid.metadata as { active: unknown }).active = "yes";
  const result = typia.validate<IComplex>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains name error", output.includes("$input.user.name"), true);
    TestValidator.equals("contains scores error", output.includes("$input.user.scores[1]"), true);
    TestValidator.equals("contains active error", output.includes("$input.metadata.active"), true);
  }
};
