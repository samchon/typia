import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateParameters_TupleHierarchical = (): void =>
  _test_functional_validateParameters("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.validateParameters(p),
  );
