import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicArray = _test_isParse(
    "DynamicArray",
    DynamicArray.generate,
    typia.createIsParse<DynamicArray>(),
    DynamicArray.SPOILERS,
);