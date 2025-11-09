import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.llm.parameters<ArrayRecursiveUnionExplicitPointerParameters, "gemini">(),
  );

interface ArrayRecursiveUnionExplicitPointerParameters {
  regular: ArrayRecursiveUnionExplicitPointer;
  nullable: ArrayRecursiveUnionExplicitPointer | null;
  optional: ArrayRecursiveUnionExplicitPointer | undefined;
  faint: ArrayRecursiveUnionExplicitPointer | null | undefined;
  array: Array<ArrayRecursiveUnionExplicitPointer>;
}