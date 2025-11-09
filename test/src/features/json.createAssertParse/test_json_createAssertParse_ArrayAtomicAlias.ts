import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createAssertParse_ArrayAtomicAlias = (): void =>
  _test_json_assertParse(TypeGuardError)("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )(typia.json.createAssertParse<ArrayAtomicAlias>());
