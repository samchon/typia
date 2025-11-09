import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_application_chatgpt_ClassGetter = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ClassGetter",
    factory: ClassGetter,
  })(typia.llm.application<ClassGetterApplication, "chatgpt">());

interface ClassGetterApplication {
  insert(p: { first: ClassGetter }): Promise<void>;
  reduce(p: {
    first: ClassGetter;
    second: ClassGetter | null;
  }): Promise<ClassGetter>;
  coalesce(p: {
    first: ClassGetter | null;
    second: ClassGetter | null;
    third?: ClassGetter | null;
  }): Promise<ClassGetter | null>;
}
