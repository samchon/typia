import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_schema_gemini_ClassGetter = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ClassGetter",
  })(typia.llm.schema<ClassGetter, "gemini">({}));
