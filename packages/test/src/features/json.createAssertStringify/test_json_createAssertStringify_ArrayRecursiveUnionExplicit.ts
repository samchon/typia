import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createAssertStringify_ArrayRecursiveUnionExplicit =
  _test_json_assertStringify(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.json.createAssertStringify<ArrayRecursiveUnionExplicit>(),
  );
