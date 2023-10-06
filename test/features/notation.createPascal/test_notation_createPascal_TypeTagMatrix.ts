import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_notation_createValidatePascal_TypeTagMatrix =
    _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(
        TypeTagMatrix
    )<typia.PascalCase<TypeTagMatrix>>({
        convert: (input) => typia.notations.validatePascal<TypeTagMatrix>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagMatrix>>(),
    });
