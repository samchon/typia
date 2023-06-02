import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_isParse_ArrayAny = _test_isParse(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.isParse<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
