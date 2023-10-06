import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_notation_validateCamel_TypeTagType =
    _test_notation_validateGeneral("TypeTagType")<TypeTagType>(
        TypeTagType
    )<typia.CamelCase<TypeTagType>>({
        convert: typia.notations.createValidateCamel<TypeTagType>(),
        assert: typia.createAssert<typia.CamelCase<TypeTagType>>(),
    });
