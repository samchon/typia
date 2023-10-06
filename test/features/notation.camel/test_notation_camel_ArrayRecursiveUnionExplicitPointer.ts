import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_validateCamel_ArrayRecursiveUnionExplicitPointer =
    _test_notation_validateGeneral("ArrayRecursiveUnionExplicitPointer")<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer
    )<typia.CamelCase<ArrayRecursiveUnionExplicitPointer>>({
        convert: typia.notations.createValidateCamel<ArrayRecursiveUnionExplicitPointer>(),
        assert: typia.createAssert<typia.CamelCase<ArrayRecursiveUnionExplicitPointer>>(),
    });
