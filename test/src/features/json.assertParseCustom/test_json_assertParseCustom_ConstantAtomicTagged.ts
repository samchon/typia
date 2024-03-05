import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_assertParseCustom_ConstantAtomicTagged =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
    typia.json.assertParse<ConstantAtomicTagged>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
