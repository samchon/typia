import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_notation_createValidateSnake_TypeTagBigInt =
    _test_notation_validateGeneral("TypeTagBigInt")<TypeTagBigInt>(
        TypeTagBigInt
    )<typia.SnakeCase<TypeTagBigInt>>({
        convert: (input) => typia.notations.validateSnake<TypeTagBigInt>(input),
        assert: typia.createAssert<typia.SnakeCase<TypeTagBigInt>>(),
    });
