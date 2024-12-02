import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_application_chatgpt_ObjectAlias = _test_llm_application({
  model: "chatgpt",
  name: "ObjectAlias",
})(typia.llm.application<ObjectAliasApplication, "chatgpt">());

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
