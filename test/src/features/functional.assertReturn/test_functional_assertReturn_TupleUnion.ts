import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertReturn_TupleUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) => typia.functional.assertReturn(p),
  );
