import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectGenericUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectGenericUnion",
  })(
    typia.llm.parameters<ObjectGenericUnionParameters, "gemini">(),
  );

interface ObjectGenericUnionParameters {
  regular: ObjectGenericUnion;
  nullable: ObjectGenericUnion | null;
  optional: ObjectGenericUnion | undefined;
  faint: ObjectGenericUnion | null | undefined;
  array: Array<ObjectGenericUnion>;
}