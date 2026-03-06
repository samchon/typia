import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IDeepNested {
  level1: {
    level2: {
      level3: {
        level4: {
          value: number;
        };
      };
    };
  };
}

export const test_llm_coerce_nested_object_deep = (): void => {
  const parameters = typia.llm.parameters<IDeepNested>();
  const original: IDeepNested = {
    level1: {
      level2: {
        level3: {
          level4: { value: 42 },
        },
      },
    },
  };

  const corrupted = {
    level1: {
      level2: {
        level3: {
          level4: JSON.stringify(original.level1.level2.level3.level4),
        },
      },
    },
  };

  const result = LlmJson.parse<IDeepNested>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("value", result.data.level1.level2.level3.level4.value, 42);
  }
};
