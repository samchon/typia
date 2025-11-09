import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ClassGetter = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ClassGetter",
    factory: ClassGetter
  })(
    typia.llm.application<ClassGetterApplication, "3.1">(),
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