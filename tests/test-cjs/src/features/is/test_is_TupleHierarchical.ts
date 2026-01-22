import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_is_TupleHierarchical = (): void =>
  _test_is("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.is<TupleHierarchical>(input),
  );
