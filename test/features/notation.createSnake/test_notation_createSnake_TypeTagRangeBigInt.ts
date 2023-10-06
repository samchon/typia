import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_createValidateSnake_TypeTagRangeBigInt =
    _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )<typia.SnakeCase<TypeTagRangeBigInt>>({
        convert: typia.notations.createValidateSnake<TypeTagRangeBigInt>(),
        assert: typia.createAssert<typia.SnakeCase<TypeTagRangeBigInt>>(),
    });
