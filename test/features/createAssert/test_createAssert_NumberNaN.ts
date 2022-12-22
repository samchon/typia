import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_NumberNaN = _test_assert(
    "NumberNaN",
    NumberNaN.generate,
    typia.createAssert<NumberNaN>(),
    NumberNaN.SPOILERS,
);