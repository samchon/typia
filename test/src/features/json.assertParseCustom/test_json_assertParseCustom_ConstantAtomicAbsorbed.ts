import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ConstantAtomicAbsorbed =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.json.assertParse<ConstantAtomicAbsorbed>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
