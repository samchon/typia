import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectUnionExplicitPointer = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectUnionExplicitPointer",
  })(
    typia.llm.parameters<ObjectUnionExplicitPointerParameters, "gemini">(),
  );

interface ObjectUnionExplicitPointerParameters {
  regular: ObjectUnionExplicitPointer;
  nullable: ObjectUnionExplicitPointer | null;
  optional: ObjectUnionExplicitPointer | undefined;
  faint: ObjectUnionExplicitPointer | null | undefined;
  array: Array<ObjectUnionExplicitPointer>;
}