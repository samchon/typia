import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_TypeTagFormat = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "TypeTagFormat",
    factory: TypeTagFormat
  })(
    typia.llm.application<TypeTagFormatApplication, "gemini">(),
  );

interface TypeTagFormatApplication {
  insert(p: { first: TypeTagFormat }): Promise<void>;
  reduce(p: { first: TypeTagFormat, second: TypeTagFormat | null }): Promise<TypeTagFormat>;
  coalesce(p: {
    first: TypeTagFormat | null,
    second: TypeTagFormat | null,
    third?: TypeTagFormat | null,
  }): Promise<TypeTagFormat | null>;
}