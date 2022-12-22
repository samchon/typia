import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_is } from "../internal/_test_is";

export const test_createIs_NumberNaN = _test_is(
    "NumberNaN",
    NumberNaN.generate,
    typia.createIs<NumberNaN>(),
    NumberNaN.SPOILERS,
);