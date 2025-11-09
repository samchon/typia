import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_standardSchema_createValidate_ToJsonAtomicUnion = (): void =>
  _test_standardSchema_validate("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )(typia.createValidate<ToJsonAtomicUnion>());
