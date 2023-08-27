import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_isPrune_TypeTagArray = _test_misc_isPrune(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) =>
    typia.misc.isPrune<TypeTagArray>(input),
);
