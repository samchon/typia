import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_TypeTagCustom = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagCustom",
  })(
    typia.llm.parameters<TypeTagCustomParameters, "chatgpt">(),
  );

interface TypeTagCustomParameters {
  regular: TypeTagCustom;
  nullable: TypeTagCustom | null;
  optional: TypeTagCustom | undefined;
  faint: TypeTagCustom | null | undefined;
  array: Array<TypeTagCustom>;
}