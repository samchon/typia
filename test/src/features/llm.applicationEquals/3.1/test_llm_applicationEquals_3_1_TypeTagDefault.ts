import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_TypeTagDefault = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "TypeTagDefault",
    factory: TypeTagDefault
  })(
    typia.llm.application<TypeTagDefaultApplication, "3.1", { equals: true }>(),
  );

interface TypeTagDefaultApplication {
  insert(p: { first: TypeTagDefault }): Promise<void>;
  reduce(p: { first: TypeTagDefault, second: TypeTagDefault | null }): Promise<TypeTagDefault>;
  coalesce(p: {
    first: TypeTagDefault | null,
    second: TypeTagDefault | null,
    third?: TypeTagDefault | null,
  }): Promise<TypeTagDefault | null>;
}