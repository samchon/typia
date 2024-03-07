import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ConstantAtomicUnion =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.json.assertStringify<ConstantAtomicUnion>(input),
  );
