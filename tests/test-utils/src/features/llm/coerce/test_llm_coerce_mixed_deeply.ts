import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IDeeplyMixed {
  level1: Array<{
    level2: {
      level3: Array<{
        value: number;
      }>;
    };
  }>;
}

export const test_llm_coerce_mixed_deeply = (): void => {
  const parameters = typia.llm.parameters<IDeeplyMixed>();
  const original: IDeeplyMixed = {
    level1: [
      {
        level2: {
          level3: [{ value: 111 }, { value: 222 }],
        },
      },
    ],
  };

  const corrupted = {
    level1: [
      JSON.stringify({
        level2: JSON.stringify({
          level3: JSON.stringify(
            original.level1[0]!.level2.level3.map((item) => JSON.stringify(item)),
          ),
        }),
      }),
    ],
  };

  const result = LlmJson.parse<IDeeplyMixed>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("level1[0].level2.level3[0].value", result.data.level1[0]!.level2.level3[0]!.value, 111);
    TestValidator.equals("level1[0].level2.level3[1].value", result.data.level1[0]!.level2.level3[1]!.value, 222);
  }
};
