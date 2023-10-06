import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_notation_createValidateCamel_TypeTagTypeBigInt =
    _test_notation_validateGeneral("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt
    )<typia.CamelCase<TypeTagTypeBigInt>>({
        convert: (input) => typia.notations.validateCamel<TypeTagTypeBigInt>(input),
        assert: typia.createAssert<typia.CamelCase<TypeTagTypeBigInt>>(),
    });
