import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_TypeTagFormat = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "TypeTagFormat",
    factory: TypeTagFormat
  })(
    typia.llm.application<TypeTagFormatApplication, "gemini", { equals: true }>(),
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