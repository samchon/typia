import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createAssertStringifyCustom_ConstantAtomicUnion =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.json.createAssertStringify<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
