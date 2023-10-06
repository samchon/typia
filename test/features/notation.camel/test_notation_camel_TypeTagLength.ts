import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_notation_validateCamel_TypeTagLength =
    _test_notation_validateGeneral("TypeTagLength")<TypeTagLength>(
        TypeTagLength
    )<typia.CamelCase<TypeTagLength>>({
        convert: typia.notations.createValidateCamel<TypeTagLength>(),
        assert: typia.createAssert<typia.CamelCase<TypeTagLength>>(),
    });
