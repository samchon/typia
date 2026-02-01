import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_validateCamel_TupleHierarchical = (): void =>
    _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
        TupleHierarchical
  )<typia.CamelCase<TupleHierarchical>>({
    convert: (input) => typia.notations.validateCamel<TupleHierarchical>(input),
    assert: typia.createAssert<typia.CamelCase<TupleHierarchical>>(),
  });
