import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_applicationEquals_gemini_DynamicEnumeration = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "DynamicEnumeration",
    factory: DynamicEnumeration,
  })(
    typia.llm.application<
      DynamicEnumerationApplication,
      "gemini",
      { equal: true }
    >(),
  );

interface DynamicEnumerationApplication {
  insert(p: { first: DynamicEnumeration }): Promise<void>;
  reduce(p: {
    first: DynamicEnumeration;
    second: DynamicEnumeration | null;
  }): Promise<DynamicEnumeration>;
  coalesce(p: {
    first: DynamicEnumeration | null;
    second: DynamicEnumeration | null;
    third?: DynamicEnumeration | null;
  }): Promise<DynamicEnumeration | null>;
}
