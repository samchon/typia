import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsReturn_TupleUnion = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertEqualsReturn(p),
  );
