import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_application_v3_0_ObjectGenericAlias =
  _test_json_application({
    version: "3.0",
    name: "ObjectGenericAlias",
  })(typia.json.application<ObjectGenericAliasApplication, "3.0">());

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
