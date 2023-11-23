import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_createValidateCamel_TupleHierarchical =
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.CamelCase<TupleHierarchical>>({
    convert: typia.notations.createValidateCamel<TupleHierarchical>(),
    assert: typia.createAssert<typia.CamelCase<TupleHierarchical>>(),
  });
