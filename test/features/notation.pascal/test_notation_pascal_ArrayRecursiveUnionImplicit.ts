import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_validatePascal_ArrayRecursiveUnionImplicit =
    _test_notation_validateGeneral("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
        ArrayRecursiveUnionImplicit
    )<typia.PascalCase<ArrayRecursiveUnionImplicit>>({
        convert: typia.notations.createValidatePascal<ArrayRecursiveUnionImplicit>(),
        assert: typia.createAssert<typia.PascalCase<ArrayRecursiveUnionImplicit>>(),
    });
