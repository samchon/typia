import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_application_claude_ObjectAlias = _test_llm_application({
  model: "claude",
  name: "ObjectAlias",
})(typia.llm.application<ObjectAliasApplication, "claude">());

interface ObjectAliasApplication {
  insert(p: { first: ObjectAlias }): Promise<void>;
  reduce(p: {
    first: ObjectAlias;
    second: ObjectAlias | null;
  }): Promise<ObjectAlias>;
  coalesce(p: {
    first: ObjectAlias | null;
    second: ObjectAlias | null;
    third?: ObjectAlias | null;
  }): Promise<ObjectAlias | null>;
}
