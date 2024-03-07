import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArrayAtomicAlias =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.json.createAssertStringify<ArrayAtomicAlias>(),
  );
