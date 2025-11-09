import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_parameters_chatgpt_ArraySimple = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ArraySimple",
  })(typia.llm.parameters<ArraySimpleParameters, "chatgpt">());

interface ArraySimpleParameters {
  regular: ArraySimple;
  nullable: ArraySimple | null;
  optional: ArraySimple | undefined;
  faint: ArraySimple | null | undefined;
  array: Array<ArraySimple>;
}
