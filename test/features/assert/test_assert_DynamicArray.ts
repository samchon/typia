import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assert_DynamicArray = _test_assert<DynamicArray>(
    DynamicArray,
)((input) => typia.assert(input));
