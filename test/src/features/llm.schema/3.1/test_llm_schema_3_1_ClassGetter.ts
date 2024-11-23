import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_schema_3_1_ClassGetter = _test_llm_schema({
  model: "3.1",
  name: "ClassGetter",
})(typia.llm.schema<ClassGetter, "3.1">({}));
