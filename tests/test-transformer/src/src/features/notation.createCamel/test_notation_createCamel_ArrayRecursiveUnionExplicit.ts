import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_createValidateCamel_ArrayRecursiveUnionExplicit = (): void =>
    _test_notation_validateGeneral("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit
  )<typia.CamelCase<ArrayRecursiveUnionExplicit>>({
    convert: typia.notations.createValidateCamel<ArrayRecursiveUnionExplicit>(),
    assert: typia.createAssert<typia.CamelCase<ArrayRecursiveUnionExplicit>>(),
  });
