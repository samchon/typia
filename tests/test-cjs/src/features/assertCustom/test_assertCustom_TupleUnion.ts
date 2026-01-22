import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertCustom_TupleUnion = (): void =>
  _test_assert(CustomGuardError)("TupleUnion")<TupleUnion>(TupleUnion)(
    (input) => typia.assert<TupleUnion>(input, (p) => new CustomGuardError(p)),
  );
