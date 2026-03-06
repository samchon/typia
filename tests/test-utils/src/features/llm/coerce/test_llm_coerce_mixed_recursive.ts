import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IRecursiveLike {
  node: {
    value: number;
    children: Array<{
      value: number;
    }>;
  };
}

export const test_llm_coerce_mixed_recursive = (): void => {
  const parameters = typia.llm.parameters<IRecursiveLike>();
  const original: IRecursiveLike = {
    node: {
      value: 1,
      children: [{ value: 10 }, { value: 20 }],
    },
  };

  const corrupted = {
    node: JSON.stringify({
      value: original.node.value,
      children: original.node.children.map((c) => JSON.stringify(c)),
    }),
  };

  const result = LlmJson.parse<IRecursiveLike>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("node.value", result.data.node.value, 1);
    TestValidator.equals("node.children[0].value", result.data.node.children[0]!.value, 10);
    TestValidator.equals("node.children[1].value", result.data.node.children[1]!.value, 20);
  }
};
