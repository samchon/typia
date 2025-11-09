import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_TypeTagRange = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "TypeTagRange",
    factory: TypeTagRange
  })(
    typia.llm.application<TypeTagRangeApplication, "gemini">(),
  );

interface TypeTagRangeApplication {
  insert(p: { first: TypeTagRange }): Promise<void>;
  reduce(p: { first: TypeTagRange, second: TypeTagRange | null }): Promise<TypeTagRange>;
  coalesce(p: {
    first: TypeTagRange | null,
    second: TypeTagRange | null,
    third?: TypeTagRange | null,
  }): Promise<TypeTagRange | null>;
}