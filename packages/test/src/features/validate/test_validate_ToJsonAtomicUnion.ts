import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_validate_ToJsonAtomicUnion = _test_validate(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  typia.validate<ToJsonAtomicUnion>(input),
);
