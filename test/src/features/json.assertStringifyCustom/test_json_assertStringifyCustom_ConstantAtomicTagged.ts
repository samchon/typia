import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_assertStringifyCustom_ConstantAtomicTagged = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.json.assertStringify<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
