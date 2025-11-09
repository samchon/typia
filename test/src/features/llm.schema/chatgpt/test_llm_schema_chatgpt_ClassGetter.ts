import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ClassGetter = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ClassGetter",
  })(typia.llm.schema<ClassGetter, "chatgpt">({}));