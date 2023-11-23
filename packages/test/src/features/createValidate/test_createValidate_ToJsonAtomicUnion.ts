import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createValidate_ToJsonAtomicUnion = _test_validate(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createValidate<ToJsonAtomicUnion>(),
);
