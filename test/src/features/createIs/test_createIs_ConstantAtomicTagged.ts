import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createIs_ConstantAtomicTagged = (): void =>
  _test_is("ConstantAtomicTagged")<ConstantAtomicTagged>(ConstantAtomicTagged)(
    typia.createIs<ConstantAtomicTagged>(),
  );
