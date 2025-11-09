import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_createValidateSnake_TupleHierarchical = (): void =>
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.SnakeCase<TupleHierarchical>>({
    convert: typia.notations.createValidateSnake<TupleHierarchical>(),
    assert: typia.createAssert<typia.SnakeCase<TupleHierarchical>>(),
  });
