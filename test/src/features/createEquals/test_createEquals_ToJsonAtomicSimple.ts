import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createEquals_ToJsonAtomicSimple = _test_equals(
  "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
  typia.createEquals<ToJsonAtomicSimple>(),
);
