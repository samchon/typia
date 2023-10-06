import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_validate_TypeTagTypeBigInt = _test_validate(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((input) => typia.validate<TypeTagTypeBigInt>(input));
