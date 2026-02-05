import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_validateKebab_ArrayAtomicSimple = (): void =>
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.KebabCase<ArrayAtomicSimple>>({
    convert: (input) => typia.notations.validateKebab<ArrayAtomicSimple>(input),
    assert: typia.createAssert<typia.KebabCase<ArrayAtomicSimple>>(),
  });
