import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_applicationEquals_claude_ObjectGenericAlias = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectGenericAlias",
    factory: ObjectGenericAlias,
  })(
    typia.llm.application<
      ObjectGenericAliasApplication,
      "claude",
      { equal: true }
    >(),
  );

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
