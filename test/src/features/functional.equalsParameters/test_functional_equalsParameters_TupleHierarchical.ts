import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsParameters_TupleHierarchical = (): void =>
  _test_functional_equalsParameters("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.equalsParameters(p),
  );
