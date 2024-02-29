import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_assertParse_ConstantAtomicTagged =
  _test_json_assertParse("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) => typia.json.assertParse<ConstantAtomicTagged>(input));
