import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_parameters_gemini_ObjectPartialAndRequired =
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectPartialAndRequired",
  })(typia.llm.parameters<ObjectPartialAndRequiredParameters, "gemini">());

interface ObjectPartialAndRequiredParameters {
  regular: ObjectPartialAndRequired;
  nullable: ObjectPartialAndRequired | null;
  optional: ObjectPartialAndRequired | undefined;
  faint: ObjectPartialAndRequired | null | undefined;
  array: Array<ObjectPartialAndRequired>;
}
