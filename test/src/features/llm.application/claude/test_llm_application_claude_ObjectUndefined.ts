import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_application_claude_ObjectUndefined =
  _test_llm_application({
    model: "claude",
    name: "ObjectUndefined",
  })(typia.llm.application<ObjectUndefinedApplication, "claude">());

interface ObjectUndefinedApplication {
  insert(p: { first: ObjectUndefined }): Promise<void>;
  reduce(p: {
    first: ObjectUndefined;
    second: ObjectUndefined | null;
  }): Promise<ObjectUndefined>;
  coalesce(p: {
    first: ObjectUndefined | null;
    second: ObjectUndefined | null;
    third?: ObjectUndefined | null;
  }): Promise<ObjectUndefined | null>;
}
