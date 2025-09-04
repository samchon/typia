import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_parameters_claude_ObjectUnionDouble = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectUnionDouble",
  })(typia.llm.parameters<ObjectUnionDoubleParameters, "claude">());

interface ObjectUnionDoubleParameters {
  regular: ObjectUnionDouble;
  nullable: ObjectUnionDouble | null;
  optional: ObjectUnionDouble | undefined;
  faint: ObjectUnionDouble | null | undefined;
  array: Array<ObjectUnionDouble>;
}
