import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_applicationEquals_gemini_ObjectDynamic = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectDynamic",
    factory: ObjectDynamic,
  })(
    typia.llm.application<
      ObjectDynamicApplication,
      "gemini",
      { equals: true }
    >(),
  );

interface ObjectDynamicApplication {
  insert(p: { first: ObjectDynamic }): Promise<void>;
  reduce(p: {
    first: ObjectDynamic;
    second: ObjectDynamic | null;
  }): Promise<ObjectDynamic>;
  coalesce(p: {
    first: ObjectDynamic | null;
    second: ObjectDynamic | null;
    third?: ObjectDynamic | null;
  }): Promise<ObjectDynamic | null>;
}
