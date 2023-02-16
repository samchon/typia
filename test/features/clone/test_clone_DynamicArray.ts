import typia from "typia";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicArray = _test_clone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.clone(input),
);
