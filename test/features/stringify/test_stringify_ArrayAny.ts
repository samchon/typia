import typia from "../../../src";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayAny = _test_stringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.stringify(input),
);
