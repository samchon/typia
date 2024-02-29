import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_json_stringify_ConstantAtomicTagged = _test_json_stringify(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  typia.json.stringify<ConstantAtomicTagged>(input),
);
