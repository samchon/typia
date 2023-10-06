import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createEquals_TypeTagRangeBigInt = _test_equals(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.createEquals<TypeTagRangeBigInt>(),
);
