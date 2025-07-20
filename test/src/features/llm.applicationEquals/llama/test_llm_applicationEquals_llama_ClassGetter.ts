import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_applicationEquals_llama_ClassGetter = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ClassGetter",
    factory: ClassGetter,
  })(
    typia.llm.application<ClassGetterApplication, "llama", { equals: true }>(),
  );

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
