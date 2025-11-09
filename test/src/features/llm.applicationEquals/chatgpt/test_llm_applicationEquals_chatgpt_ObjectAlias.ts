import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ObjectAlias = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectAlias",
    factory: ObjectAlias
  })(
    typia.llm.application<ObjectAliasApplication, "chatgpt", { equals: true }>(),
  );

interface ObjectAliasApplication {
  insert(p: { first: ObjectAlias }): Promise<void>;
  reduce(p: { first: ObjectAlias, second: ObjectAlias | null }): Promise<ObjectAlias>;
  coalesce(p: {
    first: ObjectAlias | null,
    second: ObjectAlias | null,
    third?: ObjectAlias | null,
  }): Promise<ObjectAlias | null>;
}