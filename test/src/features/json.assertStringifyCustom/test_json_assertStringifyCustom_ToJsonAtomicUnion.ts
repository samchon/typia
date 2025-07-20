import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_assertStringifyCustom_ToJsonAtomicUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ToJsonAtomicUnion",
  )<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    typia.json.assertStringify<ToJsonAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
