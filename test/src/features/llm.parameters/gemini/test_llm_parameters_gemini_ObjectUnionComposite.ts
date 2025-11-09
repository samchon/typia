import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectUnionComposite = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectUnionComposite",
  })(
    typia.llm.parameters<ObjectUnionCompositeParameters, "gemini">(),
  );

interface ObjectUnionCompositeParameters {
  regular: ObjectUnionComposite;
  nullable: ObjectUnionComposite | null;
  optional: ObjectUnionComposite | undefined;
  faint: ObjectUnionComposite | null | undefined;
  array: Array<ObjectUnionComposite>;
}