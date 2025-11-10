import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_createValidateKebab_TupleHierarchical = (): void =>
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.KebabCase<TupleHierarchical>>({
    convert: typia.notations.createValidateKebab<TupleHierarchical>(),
    assert: typia.createAssert<typia.KebabCase<TupleHierarchical>>(),
  });
