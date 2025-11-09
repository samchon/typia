import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_assertStringify_ArrayAtomicSimple = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.json.assertStringify<ArrayAtomicSimple>(input),
  );
