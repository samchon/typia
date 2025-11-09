import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_TypeTagArray = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagArray",
  })(
    typia.llm.parameters<TypeTagArrayParameters, "chatgpt">(),
  );

interface TypeTagArrayParameters {
  regular: TypeTagArray;
  nullable: TypeTagArray | null;
  optional: TypeTagArray | undefined;
  faint: TypeTagArray | null | undefined;
  array: Array<TypeTagArray>;
}