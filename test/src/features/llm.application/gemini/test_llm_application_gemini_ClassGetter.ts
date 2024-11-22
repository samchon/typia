import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_application_gemini_ClassGetter = _test_llm_application({
  model: "gemini",
  name: "ClassGetter",
})(typia.llm.application<ClassGetterApplication, "gemini">());

interface ClassGetterApplication {
  insert(first: ClassGetter): Promise<void>;
  reduce(first: ClassGetter, second: ClassGetter | null): Promise<ClassGetter>;
  coalesce(
    first: ClassGetter | null,
    second: ClassGetter | null,
    third?: ClassGetter | null,
  ): Promise<ClassGetter | null>;
}
