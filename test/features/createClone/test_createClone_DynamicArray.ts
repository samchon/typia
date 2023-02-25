import typia from "../../../src";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicArray = _test_clone(
    "DynamicArray",
    DynamicArray.generate,
    typia.createClone<DynamicArray>(),
);
