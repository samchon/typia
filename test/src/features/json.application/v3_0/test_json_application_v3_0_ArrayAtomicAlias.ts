import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_application_v3_0_ArrayAtomicAlias =
  _test_json_application({
    version: "3.0",
    name: "ArrayAtomicAlias",
  })(typia.json.application<ArrayAtomicAliasApplication, "3.0">());

interface ArrayAtomicAliasApplication {
  insert(first: ArrayAtomicAlias): Promise<void>;
  reduce(
    first: ArrayAtomicAlias,
    second: ArrayAtomicAlias | null,
  ): Promise<ArrayAtomicAlias>;
  coalesce(
    first: ArrayAtomicAlias | null,
    second: ArrayAtomicAlias | null,
    third?: ArrayAtomicAlias | null,
  ): Promise<ArrayAtomicAlias | null>;
}
