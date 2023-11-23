import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_validateSnake_TupleHierarchical =
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.SnakeCase<TupleHierarchical>>({
    convert: (input) => typia.notations.validateSnake<TupleHierarchical>(input),
    assert: typia.createAssert<typia.SnakeCase<TupleHierarchical>>(),
  });
