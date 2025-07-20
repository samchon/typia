import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_applicationEquals_llama_ClassMethod = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ClassMethod",
    factory: ClassMethod,
  })(typia.llm.application<ClassMethodApplication, "llama", { equals:; true }>());

interface ClassMethodApplication {
  insert(p: { first: ClassMethod }): Promise<void>;
  reduce(p: {
    first: ClassMethod;
    second: ClassMethod | null;
  }): Promise<ClassMethod>;
  coalesce(p: {
    first: ClassMethod | null;
    second: ClassMethod | null;
    third?: ClassMethod | null;
  }): Promise<ClassMethod | null>;
}
