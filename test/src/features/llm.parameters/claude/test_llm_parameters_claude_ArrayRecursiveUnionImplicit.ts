import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ArrayRecursiveUnionImplicit = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ArrayRecursiveUnionImplicit",
  })(
    typia.llm.parameters<ArrayRecursiveUnionImplicitParameters, "claude">(),
  );

interface ArrayRecursiveUnionImplicitParameters {
  regular: ArrayRecursiveUnionImplicit;
  nullable: ArrayRecursiveUnionImplicit | null;
  optional: ArrayRecursiveUnionImplicit | undefined;
  faint: ArrayRecursiveUnionImplicit | null | undefined;
  array: Array<ArrayRecursiveUnionImplicit>;
}