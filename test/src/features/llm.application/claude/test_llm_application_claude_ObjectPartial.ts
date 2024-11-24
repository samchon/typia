import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_application_claude_ObjectPartial = _test_llm_application({
  model: "claude",
  name: "ObjectPartial",
})(typia.llm.application<ObjectPartialApplication, "claude">());

interface ObjectPartialApplication {
  insert(first: ObjectPartial): Promise<void>;
  reduce(
    first: ObjectPartial,
    second: ObjectPartial | null,
  ): Promise<ObjectPartial>;
  coalesce(
    first: ObjectPartial | null,
    second: ObjectPartial | null,
    third?: ObjectPartial | null,
  ): Promise<ObjectPartial | null>;
}
