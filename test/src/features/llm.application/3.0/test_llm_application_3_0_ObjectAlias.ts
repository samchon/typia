import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ObjectAlias = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ObjectAlias",
    factory: ObjectAlias
  })(
    typia.llm.application<ObjectAliasApplication, "3.0">(),
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