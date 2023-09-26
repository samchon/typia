import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createValidateEquals_TypeTagTypeBigInt = _test_validateEquals(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    typia.createValidateEquals<TypeTagTypeBigInt>(),
);
