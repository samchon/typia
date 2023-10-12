import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_notation_validateCamel_TypeTagRangeBigInt =
    _test_notation_validateGeneral("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )<typia.CamelCase<TypeTagRangeBigInt>>({
        convert: (input) =>
            typia.notations.validateCamel<TypeTagRangeBigInt>(input),
        assert: typia.createAssert<typia.CamelCase<TypeTagRangeBigInt>>(),
    });
