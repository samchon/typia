import typia from "../../../src";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ArrayUnion = _test_equals(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.equals(input),
);
