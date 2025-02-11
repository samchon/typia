import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createValidateEquals_ToJsonAtomicUnion = _test_validateEquals(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createValidateEquals<ToJsonAtomicUnion>(),
);
