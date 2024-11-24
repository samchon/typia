import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_application_claude_ObjectDescription =
  _test_llm_application({
    model: "claude",
    name: "ObjectDescription",
  })(typia.llm.application<ObjectDescriptionApplication, "claude">());

interface ObjectDescriptionApplication {
  insert(first: ObjectDescription): Promise<void>;
  reduce(
    first: ObjectDescription,
    second: ObjectDescription | null,
  ): Promise<ObjectDescription>;
  coalesce(
    first: ObjectDescription | null,
    second: ObjectDescription | null,
    third?: ObjectDescription | null,
  ): Promise<ObjectDescription | null>;
}
