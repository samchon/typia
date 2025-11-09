import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isReturn_TupleHierarchical = (): void =>
  _test_functional_isReturn("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.isReturn(p),
  );
