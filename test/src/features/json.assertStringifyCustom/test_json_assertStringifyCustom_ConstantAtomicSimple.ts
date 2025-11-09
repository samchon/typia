import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_json_assertStringifyCustom_ConstantAtomicSimple = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.json.assertStringify<ConstantAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
