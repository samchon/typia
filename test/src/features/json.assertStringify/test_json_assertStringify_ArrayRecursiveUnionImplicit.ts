import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_assertStringify_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    typia.json.assertStringify<ArrayRecursiveUnionImplicit>(input),
  );
