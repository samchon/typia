import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_is_ToJsonAtomicUnion = (): void =>
  _test_is("ToJsonAtomicUnion")<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
    typia.is<ToJsonAtomicUnion>(input),
  );
