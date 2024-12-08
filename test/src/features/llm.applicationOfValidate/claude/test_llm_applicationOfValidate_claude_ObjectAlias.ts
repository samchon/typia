import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_applicationOfValidate_claude_ObjectAlias =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ObjectAlias",
    factory: ObjectAlias,
  })(typia.llm.applicationOfValidate<ObjectAliasApplication, "claude">());

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
