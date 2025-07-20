import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_assertStringifyCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
      typia.json.assertStringify<ConstantAtomicAbsorbed>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
