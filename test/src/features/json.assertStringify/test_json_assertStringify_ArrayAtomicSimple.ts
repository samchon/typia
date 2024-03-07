import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ArrayAtomicSimple =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.json.assertStringify<ArrayAtomicSimple>(input),
  );
