import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_application_claude_ObjectGenericAlias =
  _test_llm_application({
    model: "claude",
    name: "ObjectGenericAlias",
  })(typia.llm.application<ObjectGenericAliasApplication, "claude">());

interface ObjectGenericAliasApplication {
  insert(first: ObjectGenericAlias): Promise<void>;
  reduce(
    first: ObjectGenericAlias,
    second: ObjectGenericAlias | null,
  ): Promise<ObjectGenericAlias>;
  coalesce(
    first: ObjectGenericAlias | null,
    second: ObjectGenericAlias | null,
    third?: ObjectGenericAlias | null,
  ): Promise<ObjectGenericAlias | null>;
}
