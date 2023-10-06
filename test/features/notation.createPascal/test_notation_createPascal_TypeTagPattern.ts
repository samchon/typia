import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_notation_createValidatePascal_TypeTagPattern =
    _test_notation_validateGeneral("TypeTagPattern")<TypeTagPattern>(
        TypeTagPattern
    )<typia.PascalCase<TypeTagPattern>>({
        convert: (input) => typia.notations.validatePascal<TypeTagPattern>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagPattern>>(),
    });
