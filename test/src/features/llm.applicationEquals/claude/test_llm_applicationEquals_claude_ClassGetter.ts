import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ClassGetter = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ClassGetter",
    factory: ClassGetter
  })(
    typia.llm.application<ClassGetterApplication, "claude", { equals: true }>(),
  );

interface ClassGetterApplication {
  insert(p: { first: ClassGetter }): Promise<void>;
  reduce(p: { first: ClassGetter, second: ClassGetter | null }): Promise<ClassGetter>;
  coalesce(p: {
    first: ClassGetter | null,
    second: ClassGetter | null,
    third?: ClassGetter | null,
  }): Promise<ClassGetter | null>;
}