import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createAssertParseCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.json.createAssertParse<ConstantAtomicAbsorbed>(
        (p) => new CustomGuardError(p),
      ),
    );
