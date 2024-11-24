import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_application_claude_ObjectUnionComposite =
  _test_llm_application({
    model: "claude",
    name: "ObjectUnionComposite",
  })(typia.llm.application<ObjectUnionCompositeApplication, "claude">());

interface ObjectUnionCompositeApplication {
  insert(first: ObjectUnionComposite): Promise<void>;
  reduce(
    first: ObjectUnionComposite,
    second: ObjectUnionComposite | null,
  ): Promise<ObjectUnionComposite>;
  coalesce(
    first: ObjectUnionComposite | null,
    second: ObjectUnionComposite | null,
    third?: ObjectUnionComposite | null,
  ): Promise<ObjectUnionComposite | null>;
}
