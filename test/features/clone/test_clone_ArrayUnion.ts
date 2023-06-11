import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.clone(input),
);
