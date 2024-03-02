import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertParse_ArrayAtomicAlias = _test_json_assertParse(
  TypeGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.json.assertParse<ArrayAtomicAlias>(input),
);
