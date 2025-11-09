import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_TypeTagLength = (): void =>
  _test_llm_application({
    model: "claude",
    name: "TypeTagLength",
    factory: TypeTagLength
  })(
    typia.llm.application<TypeTagLengthApplication, "claude">(),
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