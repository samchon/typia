import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_createValidateKebab_ArrayAtomicSimple = (): void =>
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.KebabCase<ArrayAtomicSimple>>({
    convert: typia.notations.createValidateKebab<ArrayAtomicSimple>(),
    assert: typia.createAssert<typia.KebabCase<ArrayAtomicSimple>>(),
  });
