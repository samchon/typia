import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_is } from "../internal/_test_is";

export const test_is_NumberNaN = _test_is(
    "NumberNaN",
    NumberNaN.generate,
    (input) => typia.is(input),
    NumberNaN.SPOILERS,
);