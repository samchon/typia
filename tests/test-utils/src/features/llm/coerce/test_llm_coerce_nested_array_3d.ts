import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ICube3D {
  cube: number[][][];
}

export const test_llm_coerce_nested_array_3d = (): void => {
  const parameters = typia.llm.parameters<ICube3D>();
  const original: ICube3D = {
    cube: [
      [
        [1, 2],
        [3, 4],
      ],
    ],
  };

  const corrupted = {
    cube: [
      JSON.stringify(
        original.cube[0]!.map((inner) => JSON.stringify(inner)),
      ) as unknown,
    ],
  };

  const result = LlmJson.parse<ICube3D>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("cube[0][0]", result.data.cube[0]![0], [1, 2]);
    TestValidator.equals("cube[0][1]", result.data.cube[0]![1], [3, 4]);
  }
};
