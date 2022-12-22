import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_NumberNaN = _test_assertEquals(
    "NumberNaN",
    NumberNaN.generate,
    (input) => typia.assertEquals(input),
);