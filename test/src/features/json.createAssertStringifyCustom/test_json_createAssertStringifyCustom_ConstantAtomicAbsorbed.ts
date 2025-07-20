import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createAssertStringifyCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.json.createAssertStringify<ConstantAtomicAbsorbed>(
        (p) => new CustomGuardError(p),
      ),
    );
