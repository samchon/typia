import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assert_TupleUnion = (): void =>
  _test_assert(TypeGuardError)("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
    typia.assert<TupleUnion>(input),
  );
