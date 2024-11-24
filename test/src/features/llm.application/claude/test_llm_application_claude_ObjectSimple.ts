import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_application_claude_ObjectSimple = _test_llm_application({
  model: "claude",
  name: "ObjectSimple",
})(typia.llm.application<ObjectSimpleApplication, "claude">());

interface ObjectSimpleApplication {
  insert(first: ObjectSimple): Promise<void>;
  reduce(
    first: ObjectSimple,
    second: ObjectSimple | null,
  ): Promise<ObjectSimple>;
  coalesce(
    first: ObjectSimple | null,
    second: ObjectSimple | null,
    third?: ObjectSimple | null,
  ): Promise<ObjectSimple | null>;
}
