import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_applicationEquals_3_0_DynamicConstant = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "DynamicConstant",
    factory: DynamicConstant,
  })(
    typia.llm.application<
      DynamicConstantApplication,
      "3.0",
      { equals: true }
    >(),
  );

interface DynamicConstantApplication {
  insert(p: { first: DynamicConstant }): Promise<void>;
  reduce(p: {
    first: DynamicConstant;
    second: DynamicConstant | null;
  }): Promise<DynamicConstant>;
  coalesce(p: {
    first: DynamicConstant | null;
    second: DynamicConstant | null;
    third?: DynamicConstant | null;
  }): Promise<DynamicConstant | null>;
}
