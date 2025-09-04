import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateReturn_TupleHierarchical = (): void =>
  _test_functional_validateReturn("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.validateReturn(p),
  );
