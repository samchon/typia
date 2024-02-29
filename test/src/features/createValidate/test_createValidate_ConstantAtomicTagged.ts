import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createValidate_ConstantAtomicTagged = _test_validate(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  typia.createValidate<ConstantAtomicTagged>(),
);
