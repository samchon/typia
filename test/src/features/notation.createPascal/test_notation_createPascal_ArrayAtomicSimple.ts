import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_createValidatePascal_ArrayAtomicSimple = (): void =>
  _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )<typia.PascalCase<ArrayAtomicSimple>>({
    convert: typia.notations.createValidatePascal<ArrayAtomicSimple>(),
    assert: typia.createAssert<typia.PascalCase<ArrayAtomicSimple>>(),
  });
