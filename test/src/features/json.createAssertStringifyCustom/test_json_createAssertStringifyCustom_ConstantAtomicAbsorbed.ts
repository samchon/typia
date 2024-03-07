import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ConstantAtomicAbsorbed =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.json.createAssertStringify<ConstantAtomicAbsorbed>(
      (p) => new CustomGuardError(p),
    ),
  );
