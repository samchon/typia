import typia from "../../../src";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArraySimple = _test_stringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.stringify(input),
);
