import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertReturnAsync_TupleUnion = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.assertReturn(p),
  );
