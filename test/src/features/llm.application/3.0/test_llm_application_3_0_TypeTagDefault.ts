import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_TypeTagDefault = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "TypeTagDefault",
    factory: TypeTagDefault
  })(
    typia.llm.application<TypeTagDefaultApplication, "3.0">(),
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