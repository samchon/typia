import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_parameters_llama_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.parameters<ArrayRecursiveUnionImplicitParameters, "llama">());

interface ArrayRecursiveUnionImplicitParameters {
  regular: ArrayRecursiveUnionImplicit;
  nullable: ArrayRecursiveUnionImplicit | null;
  optional: ArrayRecursiveUnionImplicit | undefined;
  faint: ArrayRecursiveUnionImplicit | null | undefined;
  array: Array<ArrayRecursiveUnionImplicit>;
}
