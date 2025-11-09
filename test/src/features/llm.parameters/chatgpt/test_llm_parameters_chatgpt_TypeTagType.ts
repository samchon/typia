import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_TypeTagType = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagType",
  })(
    typia.llm.parameters<TypeTagTypeParameters, "chatgpt">(),
  );

interface TypeTagTypeParameters {
  regular: TypeTagType;
  nullable: TypeTagType | null;
  optional: TypeTagType | undefined;
  faint: TypeTagType | null | undefined;
  array: Array<TypeTagType>;
}