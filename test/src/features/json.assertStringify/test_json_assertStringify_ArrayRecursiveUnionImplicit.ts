import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayRecursiveUnionImplicit =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.json.assertStringify<ArrayRecursiveUnionImplicit>(input),
  );
