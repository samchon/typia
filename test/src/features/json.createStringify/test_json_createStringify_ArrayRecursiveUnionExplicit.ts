import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createStringify_ArrayRecursiveUnionExplicit = (): void =>
  _test_json_stringify(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.json.createStringify<ArrayRecursiveUnionExplicit>(),
  );
