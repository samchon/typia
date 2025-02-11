import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isFunction_TupleHierarchical =
  _test_functional_isFunction("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.isFunction(p),
  );
