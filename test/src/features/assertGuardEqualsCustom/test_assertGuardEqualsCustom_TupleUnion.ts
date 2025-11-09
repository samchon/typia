import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertGuardEqualsCustom_TupleUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TupleUnion")<TupleUnion>(
    TupleUnion,
  )((input) =>
    typia.assertGuardEquals<TupleUnion>(input, (p) => new CustomGuardError(p)),
  );
