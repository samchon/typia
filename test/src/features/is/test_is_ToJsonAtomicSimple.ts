import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_is_ToJsonAtomicSimple = _test_is(
  "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input) =>
  typia.is<ToJsonAtomicSimple>(input),
);
