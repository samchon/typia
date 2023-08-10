import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_isClone_DynamicArray = _test_misc_isClone<DynamicArray>(
    DynamicArray,
)(typia.misc.createIsClone<DynamicArray>());
