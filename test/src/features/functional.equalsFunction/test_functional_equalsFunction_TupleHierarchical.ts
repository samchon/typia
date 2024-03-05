import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsFunction_TupleHierarchical =
  _test_functional_equalsFunction("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.equalsFunction(p),
  );
