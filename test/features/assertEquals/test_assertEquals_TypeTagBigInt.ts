import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assertEquals_TypeTagBigInt = _test_assertEquals(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input) =>
    typia.assertEquals<TypeTagBigInt>(input),
);
