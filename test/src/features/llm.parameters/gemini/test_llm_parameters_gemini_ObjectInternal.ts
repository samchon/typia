import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectInternal = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectInternal",
  })(
    typia.llm.parameters<ObjectInternalParameters, "gemini">(),
  );

interface ObjectInternalParameters {
  regular: ObjectInternal;
  nullable: ObjectInternal | null;
  optional: ObjectInternal | undefined;
  faint: ObjectInternal | null | undefined;
  array: Array<ObjectInternal>;
}