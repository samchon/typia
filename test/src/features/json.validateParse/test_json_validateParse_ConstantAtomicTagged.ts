import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_validateParse_ConstantAtomicTagged =
  _test_json_validateParse("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.json.validateParse<ConstantAtomicTagged>(input));
