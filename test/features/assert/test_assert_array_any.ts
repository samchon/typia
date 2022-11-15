import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert } from "./_test_assert";

export const test_assert_array_any = _test_assert(
    "any array",
    ArrayAny.generate,
    (input) => TSON.assert(input),
    ArrayAny.SPOILERS,
);
