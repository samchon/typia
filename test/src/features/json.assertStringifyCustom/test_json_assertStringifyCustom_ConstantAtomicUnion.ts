import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_assertStringifyCustom_ConstantAtomicUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.json.assertStringify<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
