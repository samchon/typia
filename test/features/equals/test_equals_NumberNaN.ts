import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_NumberNaN = _test_equals(
    "NumberNaN",
    NumberNaN.generate,
    (input) => typia.equals(input),
);