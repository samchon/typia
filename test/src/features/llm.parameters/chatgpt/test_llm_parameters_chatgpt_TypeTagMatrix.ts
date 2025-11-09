import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_parameters_chatgpt_TypeTagMatrix = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TypeTagMatrix",
  })(typia.llm.parameters<TypeTagMatrixParameters, "chatgpt">());

interface TypeTagMatrixParameters {
  regular: TypeTagMatrix;
  nullable: TypeTagMatrix | null;
  optional: TypeTagMatrix | undefined;
  faint: TypeTagMatrix | null | undefined;
  array: Array<TypeTagMatrix>;
}
