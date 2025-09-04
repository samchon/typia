import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createValidate_ConstantAtomicUnion = (): void =>
  _test_validate("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.createValidate<ConstantAtomicUnion>());
