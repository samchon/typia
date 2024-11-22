import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_v3_1_ArrayRecursiveUnionExplicit =
  _test_json_application({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit",
  })(typia.json.application<ArrayRecursiveUnionExplicitApplication, "3.1">());

interface ArrayRecursiveUnionExplicitApplication {
  insert(first: ArrayRecursiveUnionExplicit): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionExplicit,
    second: ArrayRecursiveUnionExplicit | null,
  ): Promise<ArrayRecursiveUnionExplicit>;
  coalesce(
    first: ArrayRecursiveUnionExplicit | null,
    second: ArrayRecursiveUnionExplicit | null,
    third?: ArrayRecursiveUnionExplicit | null,
  ): Promise<ArrayRecursiveUnionExplicit | null>;
}
