import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertParameters_TupleUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.assertParameters(p),
  );
