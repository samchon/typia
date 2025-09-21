import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_notation_validateKebab_ArrayHierarchical = (): void =>
  _test_notation_validateGeneral("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )<typia.KebabCase<ArrayHierarchical>>({
    convert: (input) => typia.notations.validateKebab<ArrayHierarchical>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayHierarchical>>(),
  });
