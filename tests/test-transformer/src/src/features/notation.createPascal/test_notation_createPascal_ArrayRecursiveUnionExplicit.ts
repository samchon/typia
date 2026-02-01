import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_createValidatePascal_ArrayRecursiveUnionExplicit = (): void =>
    _test_notation_validateGeneral("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit
  )<typia.PascalCase<ArrayRecursiveUnionExplicit>>({
    convert: typia.notations.createValidatePascal<ArrayRecursiveUnionExplicit>(),
    assert: typia.createAssert<typia.PascalCase<ArrayRecursiveUnionExplicit>>(),
  });
