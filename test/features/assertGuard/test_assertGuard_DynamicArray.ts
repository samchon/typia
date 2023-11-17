import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assertGuard_DynamicArray = _test_assertGuard(
    "DynamicArray",
)<DynamicArray>(DynamicArray)((input) =>
    typia.assertGuard<DynamicArray>(input),
);
