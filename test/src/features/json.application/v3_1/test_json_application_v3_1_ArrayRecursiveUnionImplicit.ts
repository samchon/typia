import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_v3_1_ArrayRecursiveUnionImplicit =
  _test_json_application({
    version: "3.1",
    name: "ArrayRecursiveUnionImplicit",
  })(typia.json.application<ArrayRecursiveUnionImplicitApplication, "3.1">());

interface ArrayRecursiveUnionImplicitApplication {
  insert(first: ArrayRecursiveUnionImplicit): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionImplicit,
    second: ArrayRecursiveUnionImplicit | null,
  ): Promise<ArrayRecursiveUnionImplicit>;
  coalesce(
    first: ArrayRecursiveUnionImplicit | null,
    second: ArrayRecursiveUnionImplicit | null,
    third?: ArrayRecursiveUnionImplicit | null,
  ): Promise<ArrayRecursiveUnionImplicit | null>;
}
