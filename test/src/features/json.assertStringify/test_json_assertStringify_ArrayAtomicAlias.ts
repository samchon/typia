import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertStringify_ArrayAtomicAlias = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.json.assertStringify<ArrayAtomicAlias>(input),
  );
