import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_TypeTagLength = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "TypeTagLength",
    factory: TypeTagLength
  })(
    typia.llm.application<TypeTagLengthApplication, "3.1">(),
  );

interface TypeTagLengthApplication {
  insert(p: { first: TypeTagLength }): Promise<void>;
  reduce(p: { first: TypeTagLength, second: TypeTagLength | null }): Promise<TypeTagLength>;
  coalesce(p: {
    first: TypeTagLength | null,
    second: TypeTagLength | null,
    third?: TypeTagLength | null,
  }): Promise<TypeTagLength | null>;
}