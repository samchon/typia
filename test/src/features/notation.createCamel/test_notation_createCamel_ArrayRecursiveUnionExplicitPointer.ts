import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_createValidateCamel_ArrayRecursiveUnionExplicitPointer = (): void =>
    _test_notation_validateGeneral("ArrayRecursiveUnionExplicitPointer")<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer
  )<typia.CamelCase<ArrayRecursiveUnionExplicitPointer>>({
    convert: typia.notations.createValidateCamel<ArrayRecursiveUnionExplicitPointer>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRecursiveUnionExplicitPointer>>(),
  });
