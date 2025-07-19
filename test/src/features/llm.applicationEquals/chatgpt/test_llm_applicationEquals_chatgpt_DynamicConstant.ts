import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_application_chatgpt_DynamicConstant =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "DynamicConstant",
    factory: DynamicConstant,
  })(
    typia.llm.application<
      DynamicConstantApplication,
      "chatgpt",
      { equal: true }
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
