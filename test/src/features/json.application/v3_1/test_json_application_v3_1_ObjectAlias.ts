import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_application_v3_1_ObjectAlias = _test_json_application({
  version: "3.1",
  name: "ObjectAlias",
})(typia.json.application<ObjectAliasApplication, "3.1">());

interface ObjectAliasApplication {
  insert(first: ObjectAlias): Promise<void>;
  reduce(first: ObjectAlias, second: ObjectAlias | null): Promise<ObjectAlias>;
  coalesce(
    first: ObjectAlias | null,
    second: ObjectAlias | null,
    third?: ObjectAlias | null,
  ): Promise<ObjectAlias | null>;
}
