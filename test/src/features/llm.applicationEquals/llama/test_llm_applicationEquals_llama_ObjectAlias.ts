import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_llm_applicationEquals_llama_ObjectAlias = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectAlias",
    factory: ObjectAlias,
  })(
    typia.llm.application<ObjectAliasApplication, "llama", { equals: true }>(),
  );

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
