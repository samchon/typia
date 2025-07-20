import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createAssertParseCustom_ConstantAtomicUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.json.createAssertParse<ConstantAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
