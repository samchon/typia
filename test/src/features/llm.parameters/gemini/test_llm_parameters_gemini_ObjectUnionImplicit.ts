import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_parameters_gemini_ObjectUnionImplicit = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectUnionImplicit",
  })(typia.llm.parameters<ObjectUnionImplicitParameters, "gemini">());

interface ObjectUnionImplicitParameters {
  regular: ObjectUnionImplicit;
  nullable: ObjectUnionImplicit | null;
  optional: ObjectUnionImplicit | undefined;
  faint: ObjectUnionImplicit | null | undefined;
  array: Array<ObjectUnionImplicit>;
}
