import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_llm_application_ObjectGenericAlias = (): void =>
  _test_llm_application({
    name: "ObjectGenericAlias",
    factory: ObjectGenericAlias,
  })(typia.llm.application<ObjectGenericAliasApplication>());

interface ObjectGenericAliasApplication {
  insert(p: { first: ObjectGenericAlias }): Promise<void>;
  reduce(p: {
    first: ObjectGenericAlias;
    second: ObjectGenericAlias | null;
  }): Promise<ObjectGenericAlias>;
  coalesce(p: {
    first: ObjectGenericAlias | null;
    second: ObjectGenericAlias | null;
    third?: ObjectGenericAlias | null;
  }): Promise<ObjectGenericAlias | null>;
}
