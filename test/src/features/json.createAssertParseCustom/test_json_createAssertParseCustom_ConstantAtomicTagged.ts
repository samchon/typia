import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createAssertParseCustom_ConstantAtomicTagged =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ConstantAtomicTagged",
    )<ConstantAtomicTagged>(ConstantAtomicTagged)(
      typia.json.createAssertParse<ConstantAtomicTagged>(
        (p) => new CustomGuardError(p),
      ),
    );
