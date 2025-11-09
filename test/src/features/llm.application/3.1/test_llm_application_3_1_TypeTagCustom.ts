import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_TypeTagCustom = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "TypeTagCustom",
    factory: TypeTagCustom
  })(
    typia.llm.application<TypeTagCustomApplication, "3.1">(),
  );

interface TypeTagCustomApplication {
  insert(p: { first: TypeTagCustom }): Promise<void>;
  reduce(p: { first: TypeTagCustom, second: TypeTagCustom | null }): Promise<TypeTagCustom>;
  coalesce(p: {
    first: TypeTagCustom | null,
    second: TypeTagCustom | null,
    third?: TypeTagCustom | null,
  }): Promise<TypeTagCustom | null>;
}