import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createIsClone_ConstantAtomicUnion = (): void =>
  _test_misc_isClone("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.misc.createIsClone<ConstantAtomicUnion>());
