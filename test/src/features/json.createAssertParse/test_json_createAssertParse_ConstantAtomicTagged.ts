import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_createAssertParse_ConstantAtomicTagged =
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)(
    typia.json.createAssertParse<ConstantAtomicTagged>(),
  );
