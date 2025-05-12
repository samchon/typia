import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_parameters_chatgpt_ArrayRecursiveUnionExplicit =
  _test_llm_parameters({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.llm.parameters<ArrayRecursiveUnionExplicitParameters, "chatgpt">());

interface ArrayRecursiveUnionExplicitParameters {
  regular: ArrayRecursiveUnionExplicit;
  nullable: ArrayRecursiveUnionExplicit | null;
  optional: ArrayRecursiveUnionExplicit | undefined;
  faint: ArrayRecursiveUnionExplicit | null | undefined;
  array: Array<ArrayRecursiveUnionExplicit>;
}
