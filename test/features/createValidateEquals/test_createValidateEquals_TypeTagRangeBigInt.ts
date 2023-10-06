import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createValidateEquals_TypeTagRangeBigInt = _test_validateEquals(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)(typia.createValidateEquals<TypeTagRangeBigInt>());
