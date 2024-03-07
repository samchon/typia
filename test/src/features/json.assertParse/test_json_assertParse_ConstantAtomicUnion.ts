import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ConstantAtomicUnion = _test_json_assertParse(
  TypeGuardError,
)("ConstantAtomicUnion")<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.json.assertParse<ConstantAtomicUnion>(input),
);
