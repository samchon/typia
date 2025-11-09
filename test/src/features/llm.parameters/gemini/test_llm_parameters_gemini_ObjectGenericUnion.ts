import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_parameters_gemini_ObjectGenericUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectGenericUnion",
  })(typia.llm.parameters<ObjectGenericUnionParameters, "gemini">());

interface ObjectGenericUnionParameters {
  regular: ObjectGenericUnion;
  nullable: ObjectGenericUnion | null;
  optional: ObjectGenericUnion | undefined;
  faint: ObjectGenericUnion | null | undefined;
  array: Array<ObjectGenericUnion>;
}
