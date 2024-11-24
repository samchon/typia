import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_application_claude_ObjectUnionDouble =
  _test_llm_application({
    model: "claude",
    name: "ObjectUnionDouble",
  })(typia.llm.application<ObjectUnionDoubleApplication, "claude">());

interface ObjectUnionDoubleApplication {
  insert(first: ObjectUnionDouble): Promise<void>;
  reduce(
    first: ObjectUnionDouble,
    second: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble>;
  coalesce(
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble | null>;
}
