import typia from "typia";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectUnionDouble = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectUnionDouble",
  })(
    typia.llm.parameters<ObjectUnionDoubleParameters, "gemini">(),
  );

interface ObjectUnionDoubleParameters {
  regular: ObjectUnionDouble;
  nullable: ObjectUnionDouble | null;
  optional: ObjectUnionDouble | undefined;
  faint: ObjectUnionDouble | null | undefined;
  array: Array<ObjectUnionDouble>;
}