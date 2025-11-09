import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createAssertParse_ConstantAtomicUnion = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.json.createAssertParse<ConstantAtomicUnion>(),
  );
