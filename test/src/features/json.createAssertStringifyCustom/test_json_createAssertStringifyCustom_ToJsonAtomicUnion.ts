import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_createAssertStringifyCustom_ToJsonAtomicUnion =
  _test_json_assertStringify(CustomGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.json.createAssertStringify<ToJsonAtomicUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
