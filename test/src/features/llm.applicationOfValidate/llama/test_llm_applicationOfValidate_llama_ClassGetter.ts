import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_applicationOfValidate_llama_ClassGetter =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ClassGetter",
    factory: ClassGetter,
  })(typia.llm.applicationOfValidate<ClassGetterApplication, "llama">());

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
