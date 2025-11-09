import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_TypeTagType = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "TypeTagType",
    factory: TypeTagType
  })(
    typia.llm.application<TypeTagTypeApplication, "claude", { equals: true }>(),
  );

interface TypeTagTypeApplication {
  insert(p: { first: TypeTagType }): Promise<void>;
  reduce(p: { first: TypeTagType, second: TypeTagType | null }): Promise<TypeTagType>;
  coalesce(p: {
    first: TypeTagType | null,
    second: TypeTagType | null,
    third?: TypeTagType | null,
  }): Promise<TypeTagType | null>;
}