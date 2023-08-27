import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_validate_TypeTagBigInt = _test_validate(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.createValidate<TypeTagBigInt>());
