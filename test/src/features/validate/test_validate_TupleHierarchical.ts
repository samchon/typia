import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_validate_TupleHierarchical = (): void =>
  _test_validate("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)(
    (input) => typia.validate<TupleHierarchical>(input),
  );
