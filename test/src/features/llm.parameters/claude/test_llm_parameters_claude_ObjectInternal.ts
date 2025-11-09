import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_llm_parameters_claude_ObjectInternal = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectInternal",
  })(typia.llm.parameters<ObjectInternalParameters, "claude">());

interface ObjectInternalParameters {
  regular: ObjectInternal;
  nullable: ObjectInternal | null;
  optional: ObjectInternal | undefined;
  faint: ObjectInternal | null | undefined;
  array: Array<ObjectInternal>;
}
