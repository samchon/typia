import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createAssertParse_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_json_assertParse(TypeGuardError)(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
      typia.json.createAssertParse<ArrayRecursiveUnionExplicitPointer>(),
    );
