import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_application_3_1_ClassMethod = _test_llm_application({
  model: "3.1",
  name: "ClassMethod",
})(typia.llm.application<ClassMethodApplication, "3.1">());

interface ClassMethodApplication {
  insert(first: ClassMethod): Promise<void>;
  reduce(first: ClassMethod, second: ClassMethod | null): Promise<ClassMethod>;
  coalesce(
    first: ClassMethod | null,
    second: ClassMethod | null,
    third?: ClassMethod | null,
  ): Promise<ClassMethod | null>;
}
