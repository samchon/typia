import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_validateEquals_ToJsonAtomicUnion = (): void =>
  _test_validateEquals("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )((input) => typia.validateEquals<ToJsonAtomicUnion>(input));
