import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_llm_applicationOfValidate_3_1_ObjectGenericAlias =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectGenericAlias",
    factory: ObjectGenericAlias,
  })(typia.llm.applicationOfValidate<ObjectGenericAliasApplication, "3.1">());

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
