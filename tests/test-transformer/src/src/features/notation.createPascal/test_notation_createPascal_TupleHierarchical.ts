import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_createValidatePascal_TupleHierarchical = (): void =>
    _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
        TupleHierarchical
  )<typia.PascalCase<TupleHierarchical>>({
    convert: typia.notations.createValidatePascal<TupleHierarchical>(),
    assert: typia.createAssert<typia.PascalCase<TupleHierarchical>>(),
  });
