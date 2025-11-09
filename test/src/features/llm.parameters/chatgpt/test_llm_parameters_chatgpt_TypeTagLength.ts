import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_TypeTagLength = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagLength",
  })(
    typia.llm.parameters<TypeTagLengthParameters, "chatgpt">(),
  );

interface TypeTagLengthParameters {
  regular: TypeTagLength;
  nullable: TypeTagLength | null;
  optional: TypeTagLength | undefined;
  faint: TypeTagLength | null | undefined;
  array: Array<TypeTagLength>;
}