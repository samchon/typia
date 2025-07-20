import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_llm_parameters_3_0_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.llm.parameters<ArrayRecursiveUnionImplicitParameters, "3.0">());

interface ArrayRecursiveUnionImplicitParameters {
  regular: ArrayRecursiveUnionImplicit;
  nullable: ArrayRecursiveUnionImplicit | null;
  optional: ArrayRecursiveUnionImplicit | undefined;
  faint: ArrayRecursiveUnionImplicit | null | undefined;
  array: Array<ArrayRecursiveUnionImplicit>;
}
