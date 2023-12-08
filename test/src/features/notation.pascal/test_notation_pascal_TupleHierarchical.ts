import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_validatePascal_TupleHierarchical =
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.PascalCase<TupleHierarchical>>({
    convert: (input) =>
      typia.notations.validatePascal<TupleHierarchical>(input),
    assert: typia.createAssert<typia.PascalCase<TupleHierarchical>>(),
  });
