import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isParameters_TupleHierarchical = (): void =>
  _test_functional_isParameters("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.isParameters(p),
  );
