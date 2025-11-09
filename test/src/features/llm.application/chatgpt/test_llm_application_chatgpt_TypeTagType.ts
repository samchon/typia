import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_TypeTagType = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "TypeTagType",
    factory: TypeTagType
  })(
    typia.llm.application<TypeTagTypeApplication, "chatgpt">(),
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