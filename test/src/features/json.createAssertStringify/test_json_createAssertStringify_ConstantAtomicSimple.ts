import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ConstantAtomicSimple =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.json.createAssertStringify<ConstantAtomicSimple>(),
  );
