import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsReturn_TupleHierarchical =
  _test_functional_equalsReturn("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.equalsReturn(p),
  );
