import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_notation_validateKebab_TupleHierarchical = (): void =>
  _test_notation_validateGeneral("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )<typia.KebabCase<TupleHierarchical>>({
    convert: (input) => typia.notations.validateKebab<TupleHierarchical>(input),
    assert: typia.createAssert<typia.KebabCase<TupleHierarchical>>(),
  });
