import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_json_createAssertParse_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_json_assertParse(TypeGuardError)(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
      typia.json.createAssertParse<ArrayRecursiveUnionImplicit>(),
    );
